// Original postcard artwork used until a memory has its own photograph.
function postcard(index) {
  const palettes = [
    ["#422c53", "#db786c", "#ffcc91", "#51445e", "#253749"],
    ["#293b65", "#ca7790", "#ffd4a8", "#624969", "#303851"],
    ["#416d83", "#b9cac0", "#fff0bc", "#537778", "#1e404e"],
    ["#181d46", "#665781", "#e2bbd4", "#443b64", "#252944"],
    ["#364663", "#f1a270", "#ffe9ad", "#88716f", "#384b58"],
    ["#20424e", "#83b1ae", "#f1dec5", "#527774", "#273e4a"],
    ["#48304d", "#dc8893", "#ffe4c2", "#735467", "#3c344a"],
  ];
  const [sky, horizon, light, hill, front] = palettes[index % palettes.length];
  const canvas = document.createElement("canvas");
  canvas.width = 1280;
  canvas.height = 650;
  const c = canvas.getContext("2d");
  let seed = index + 30;
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const gradient = (y, end, a, b) => {
    const g = c.createLinearGradient(0, y, 0, end);
    g.addColorStop(0, a);
    g.addColorStop(1, b);
    return g;
  };
  c.fillStyle = gradient(0, 420, sky, horizon);
  c.fillRect(0, 0, 1280, 650);
  const sunX = 700 + random() * 390;
  c.fillStyle = light;
  c.beginPath();
  c.arc(sunX, 210 + (index % 3) * 18, 48, 0, Math.PI * 2);
  c.fill();
  function ridge(base, amplitude, color, phase) {
    c.beginPath();
    c.moveTo(0, 650);
    for (let x = 0; x <= 1280; x += 4) {
      const y =
        base +
        amplitude *
          (Math.sin(x / 118 + phase) * 0.48 +
            Math.sin(x / 242 + phase * 2) * 0.45 +
            Math.sin(x / 38 + phase) * 0.12) +
        random() * 1.5;
      c.lineTo(x, y);
    }
    c.lineTo(1280, 650);
    c.fillStyle = color;
    c.fill();
  }
  ridge(365, 65, hill, index + 1);
  ridge(391, 48, front, index + 5);
  c.fillStyle = gradient(405, 650, horizon, front);
  c.fillRect(0, 405, 1280, 245);
  for (let i = 0; i < 1600; i++) {
    const y = 405 + random() * 245,
      x = random() * 1280;
    c.globalAlpha = random() * 0.28;
    c.fillStyle = Math.abs(x - sunX) < (y - 360) * 0.6 ? light : front;
    c.fillRect(x, y, 3 + random() * 26, 1 + random() * 1.4);
  }
  c.globalAlpha = 1;
  ridge(614, 68, front, index + 15);
  return canvas.toDataURL("image/jpeg", 0.86);
}
