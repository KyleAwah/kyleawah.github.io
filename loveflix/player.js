const player = $("#player"),
  movie = $("#movie");
let currentVideo = 0;
function clock(seconds) {
  seconds = Math.max(0, Math.floor(seconds || 0));
  return Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, "0");
}
function playMovie() {
  movie.play().catch(() => {
    $("#video-status").textContent = movie.error
      ? "This video format cannot play in this browser. Try Safari or download the original below."
      : "Press Play to start the video.";
  });
}
function startVideo(i) {
  currentVideo = i;
  movie.pause();
  $("#modal").close();
  movie.src = videoPath(i);
  movie.poster = cover(i);
  movie.playbackRate = Number($("#speed").value);
  $("#now-playing").textContent = memories[i][0];
  $("#player-title").textContent = memories[i][0];
  $("#video-status").replaceChildren();
  $("#seek").value = 0;
  $("#remaining").textContent = "0:00";
  if (!player.open) player.showModal();
  playMovie();
}
async function closePlayer() {
  movie.pause();
  if (document.fullscreenElement === player) {
    try {
      await document.exitFullscreen();
    } catch {}
  }
  player.close();
  movie.removeAttribute("src");
  movie.load();
}
$("#back").onclick = closePlayer;
player.addEventListener("cancel", (e) => {
  e.preventDefault();
  closePlayer();
});
player.addEventListener("close", () => movie.pause());
$("#toggle").onclick = () => (movie.paused ? playMovie() : movie.pause());
movie.onclick = $("#toggle").onclick;
movie.onplay = () => {
  $("#toggle").textContent = "Ⅱ";
  $("#toggle").setAttribute("aria-label", "Pause");
  $("#video-status").textContent = "";
};
movie.onpause = () => {
  $("#toggle").textContent = "▶";
  $("#toggle").setAttribute("aria-label", "Play");
};
movie.ontimeupdate = () => {
  if (!Number.isFinite(movie.duration)) return;
  $("#seek").value = (movie.currentTime / movie.duration) * 100;
  $("#seek").style.setProperty("--progress", $("#seek").value + "%");
  $("#remaining").textContent = "−" + clock(movie.duration - movie.currentTime);
};
$("#seek").oninput = () => {
  if (Number.isFinite(movie.duration))
    movie.currentTime = (movie.duration * $("#seek").value) / 100;
};
function skip(seconds) {
  if (Number.isFinite(movie.duration))
    movie.currentTime = Math.max(
      0,
      Math.min(movie.duration, movie.currentTime + seconds),
    );
}
$("#rewind").onclick = () => skip(-10);
$("#forward").onclick = () => skip(10);
$("#mute").onclick = () => {
  movie.muted = !movie.muted;
};
movie.onvolumechange = () => {
  $("#mute").textContent = movie.muted || !movie.volume ? "⊘" : "♪";
  $("#mute").setAttribute("aria-label", movie.muted ? "Unmute" : "Mute");
  $("#volume").value = movie.muted ? 0 : movie.volume;
};
$("#volume").oninput = () => {
  movie.volume = Number($("#volume").value);
  movie.muted = false;
};
$("#speed").onchange = () => {
  movie.playbackRate = Number($("#speed").value);
};
$("#next").onclick = () => startVideo((currentVideo + 1) % memories.length);
$("#fullscreen").onclick = async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (player.requestFullscreen) await player.requestFullscreen();
    else if (movie.webkitEnterFullscreen) movie.webkitEnterFullscreen();
  } catch {
    $("#video-status").textContent =
      "Fullscreen is unavailable in this browser.";
  }
};
movie.onerror = () => {
  const status = $("#video-status");
  status.textContent = "This video format cannot play here. Try Safari, or ";
  const link = document.createElement("a");
  link.href = videoPath(currentVideo);
  link.download = videoFiles[currentVideo];
  link.textContent = "download this video";
  status.append(link);
};
player.addEventListener("keydown", (e) => {
  if (e.target.matches("input,select,button")) return;
  if (e.code === "Space") {
    e.preventDefault();
    $("#toggle").click();
  }
  if (e.code === "ArrowLeft") {
    e.preventDefault();
    skip(-10);
  }
  if (e.code === "ArrowRight") {
    e.preventDefault();
    skip(10);
  }
});
// Capture one frame per video, sequentially, to limit memory use with large clips.
async function loadPosters() {
  for (let i = 0; i < videoFiles.length; i++) {
    await new Promise((resolve) => {
      const preview = document.createElement("video");
      preview.muted = true;
      preview.playsInline = true;
      preview.preload = "auto";
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        clearTimeout(timeout);
        preview.removeAttribute("src");
        preview.load();
        resolve();
      };
      const timeout = setTimeout(finish, 15000);
      preview.onloadedmetadata = () => {
        preview.currentTime = Math.min(0.5, preview.duration / 2);
      };
      preview.onseeked = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = 960;
          canvas.height = Math.round(
            (960 * preview.videoHeight) / preview.videoWidth,
          );
          canvas
            .getContext("2d")
            .drawImage(preview, 0, 0, canvas.width, canvas.height);
          posters.set(i, canvas.toDataURL("image/jpeg", 0.85));
          if (!$("#catalog").hidden) renderCatalog();
          if ($("#modal").open && openMemory === i && $(".cover"))
            $(".cover").src = cover(i);
        } catch {}
        finish();
      };
      preview.onerror = finish;
      preview.src = videoPath(i);
    });
  }
}
loadPosters();
