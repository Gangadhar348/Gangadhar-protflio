const texts = [
  "Full stack developer",
  "React Developer",
  "Node.js Developer",
  "MongoDb Enthusiast",
];

let i = 0,
  j = 0;
let current = "";
let isDeleting = false;
function type() {
  current = texts[i];
  if (!isDeleting) {
    j++;
  } else {
    j--;
  }
  document.getElementById("typing").textContent = current.substring(0, j);
}

type();

// PARTICLES

const canvas = document.getElementById("Particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let Particles = [];
for (let i = 0; i < 100; i++) {
  Particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Particles.forEach((p) => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.pi * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}
drawParticles();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
