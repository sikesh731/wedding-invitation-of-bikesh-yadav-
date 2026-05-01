// Name from URL
const params = new URLSearchParams(window.location.search);
let name = params.get("name") || "Dear Guest";

// Text
document.getElementById("welcome").innerText = "Namaste " + name + " ji 🙏";

document.getElementById("message").innerText =
  "Hamro bibaha ma tapai lai hridaya dekhi nimantran cha. Kripaya aaera hamilai ashirwad dinu hola.";

// Start
function startExperience() {
  let music = document.getElementById("bgMusic");
  music.volume = 0.2; // यहाँ adjust गर
  music.play();

  document.getElementById("voice").play();
}


// 📸 Slideshow
let images = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 3000);


// ===== ULTRA PREMIUM EFFECT =====
const canvas = document.getElementById("effects");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const symbols = ["🌸", "💖", "✨"];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 1 + 0.5,
    symbol: symbols[Math.floor(Math.random() * symbols.length)]
  });
}

function drawEffects() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.font = p.size + "px serif";
    ctx.fillText(p.symbol, p.x, p.y);

    p.y += p.speed;

    if (p.y > canvas.height) {
      p.y = -20;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawEffects, 30);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});