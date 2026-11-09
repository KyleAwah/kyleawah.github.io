const $ = (selector) => document.querySelector(selector);
const videoFiles = [
  "C1639.mov",
  "IMG_3855.mov",
  "IMG_6521.mov",
  "IMG_1003.mov",
  "5faf8ca9-502a-4eaf-9b6a-880533abf18d.mov",
  "IMG_5419.mov",
];
const memories = [
  ["Loveuuinnacar", "ebibi and kyky often encounter in da car, plenty moments of lovies occour in this series and may contain picy moments so for that reason it also M for mature content."],
  ["My silli ebibi", "ebibi and kyky often make silli faces and come up with funny new words. Through out their journey they invent the BABALANGUAGE the greatest language on da planet and in da universe."],
  [
    "Happie Anikykywee 😍❤️‍🔥",
    "A story about how i loveuu more than anything ever, in this story kyky loves and protects ebibi forever and ever and ever and provides foodie, loveups and plenty care and affection. \n\n Rated M for mature content (bc it may include some picy scenes and some naughty stuff sometimes)",
  ],
  ["Babaland 🏝️", "kyky makes a first ever trip to babaland to discover ebeting alongside ebibi. Their journey takes them across beaches roads and restaurants enjoying many new foodies and includes plenty moments of lovies"],
  ["Fishing for fortune", "Bubu is gomimiii through a rough patch in life so ebibi decides to cheer him up by using da secret weapon of fortune cookie to find hidden luck to give to kyky."],
  ["Feeduuu", "Throughout their journey kyky and ebibi often eat together, many varying types of delicious foodie and restaurant experiences."],
];
const videoPath = (i) => "videos/" + videoFiles[i];
const photos = new Map();
// Static WebP covers load without requesting the original videos.
const posterPath = (i) =>
  "images/thumbnails/" + videoFiles[i].replace(/\.mov$/i, ".webp");
function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
let names = read("loveflix-names", ["kyky", "ebibi ❤️‍🔥"]);
// Update the original defaults in browsers that have already saved them.
names = names.map((name) =>
  ["Kyle", "kyky"].includes(name)
    ? "kyky"
    : ["My Love", "ebibi ❤️‍🔥", "emibot ❤️‍🔥"].includes(name)
      ? "ebibi ❤️‍🔥"
      : name,
);
let lists = read("loveflix-lists", [[], []]);
let profile = 0,
  tab = "Home",
  editing = false,
  openMemory = null,
  playing = false;
const db = new Promise((resolve, reject) => {
  const request = indexedDB.open("loveflix-photos", 1);
  request.onupgradeneeded = () => request.result.createObjectStore("photos");
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});
function cover(i) {
  return photos.get(i) || posterPath(i);
}
function avatar(i) {
  return (
    '<span class="avatar ' +
    (i ? "red" : "blue") +
    '" aria-hidden="true"><i class="smile"></i></span>'
  );
}
function renderProfiles() {
  $("#profiles").replaceChildren();
  names.forEach((name, i) => {
    const button = document.createElement("button");
    button.className = "profile";
    button.innerHTML = avatar(i);
    if (editing)
      button.firstChild.insertAdjacentHTML(
        "beforeend",
        '<span class="pencil">✎</span>',
      );
    button.append(document.createTextNode(name));
    button.onclick = () => {
      if (!editing) enter(i);
    };
    $("#profiles").append(button);
  });
  $(".chooser h1").textContent = editing
    ? "Manage Profiles"
    : "Who's watching?";
  $("#manage").textContent = editing ? "Done" : "Manage Profiles";
}
function showPicker() {
  editing = false;
  document.body.className = "";
  $("#catalog").hidden = true;
  $("nav").hidden = true;
  $("#switch").hidden = true;
  $("#picker").hidden = false;
  renderProfiles();
}
function enter(i) {
  profile = i;
  tab = "Home";
  document.body.className = "browsing";
  $("#picker").hidden = true;
  $("#catalog").hidden = false;
  $("nav").hidden = false;
  $("#switch").hidden = false;
  $("#switch").innerHTML = avatar(i) + "▾";
  $("#switch").title = "Switch profile · " + names[i];
  renderCatalog();
  window.scrollTo(0, 0);
}
function shelf(title, ids) {
  const h = document.createElement("h2");
  h.textContent = title;
  $("#shelves").append(h);
  const row = document.createElement("div");
  row.className = "row";
  ids.forEach((i) => {
    const b = document.createElement("button");
    b.className = "tile";
    b.style.backgroundImage = "url(" + cover(i) + ")";
    const label = document.createElement("span");
    label.textContent = memories[i][0];
    b.append(label);
    b.onclick = () => detail(i, false);
    row.append(b);
  });
  $("#shelves").append(row);
}
function renderCatalog() {
  document.querySelectorAll("[data-tab]").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tab);
    b.setAttribute("aria-pressed", b.dataset.tab === tab);
  });
  $("#hero").hidden = tab !== "Home";
  $("#hero").style.backgroundImage = "url(" + cover(2) + ")";
  const shelves = $("#shelves");
  shelves.replaceChildren();
  shelves.classList.toggle("standalone", tab !== "Home");
  if (tab === "Home") {
    shelf("Made for " + names[profile], [2, 0, 1, 3, 4, 5]);
    shelf("We Think You'll Love these", [0, 5, 4, 3, 1]);
    shelf("Critically Acclaimed Series", [3, 1, 4, 0, 5]);
  }
  if (tab === "Memories") shelf("All Memories", [2, 0, 1, 3, 4, 5]);
  if (tab === "My List") {
    shelf(
      "My List",
      lists[profile].filter((i) => memories[i]),
    );
    if (!lists[profile].length) {
      const p = document.createElement("p");
      p.textContent = "Open a memory and choose “+ My List” to save it here.";
      shelves.append(p);
    }
  }
}
function detail(i, slideshow) {
  if (slideshow) {
    startVideo(i);
    return;
  }
  openMemory = i;
  playing = false;
  const [title, description] = memories[i],
    saved = lists[profile].includes(i);
  $("#details").innerHTML =
    '<img class="cover" alt=""><div class="panel"><span class="meta"></span><h2></h2><p></p><div class="actions"></div><p role="status"></p></div>';
  $(".cover").src = cover(i);
  $(".meta").textContent = slideshow
    ? "Memory " + (i + 1) + " of " + memories.length
    : "Loveflix Original";
  $(".panel h2").textContent = title;
  $(".panel p").textContent = description;
  const action = (label, fn) => {
    const b = document.createElement("button");
    b.textContent = label;
    b.onclick = fn;
    $(".panel .actions").append(b);
  };
  if (slideshow) {
    action("‹ Previous", () =>
      detail((i + memories.length - 1) % memories.length, true),
    );
    action("Next ›", () => detail((i + 1) % memories.length, true));
  } else {
    action("▶ Play", () => startVideo(i));
    action(saved ? "✓ My List" : "+ My List", () => {
      lists[profile] = saved
        ? lists[profile].filter((id) => id !== i)
        : [...lists[profile], i];
      localStorage.setItem("loveflix-lists", JSON.stringify(lists));
      renderCatalog();
      detail(i, false);
    });
  }
  if (!$("#modal").open) $("#modal").showModal();
}
(async () => {
  try {
    const database = await db;
    const request = database
      .transaction("photos")
      .objectStore("photos")
      .openCursor();
    request.onsuccess = () => {
      const cur = request.result;
      if (cur) {
        photos.set(cur.key, URL.createObjectURL(cur.value));
        cur.continue();
      } else if (!$("#catalog").hidden) {
        renderCatalog();
        if ($("#modal").open && openMemory !== null)
          detail(openMemory, playing);
      }
    };
  } catch {
    /* Artwork remains available without local photo storage. */
  }
})();
$("#manage").onclick = () => {
  editing = !editing;
  renderProfiles();
};
$("#switch").onclick = showPicker;
$("#brand").onclick = () =>
  $("#picker").hidden ? enter(profile) : showPicker();
document.querySelectorAll("[data-tab]").forEach(
  (b) =>
    (b.onclick = () => {
      tab = b.dataset.tab;
      renderCatalog();
      window.scrollTo(0, 0);
    }),
);
$("#info").onclick = () => detail(2, false);
$("#play").onclick = () => startVideo(2);
$(".close").onclick = () => $("#modal").close();
$("#modal").onclick = (e) => {
  if (e.target === $("#modal")) $("#modal").close();
};
showPicker();
