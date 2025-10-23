/* =======================================================
   script.js — Efek Modern untuk Website Organisasi PIK-R
   ======================================================= */

// === 1. Navbar Scroll Effect ===
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// === 2. Scroll Reveal Animation ===
const revealElements = document.querySelectorAll(
  ".fade-scroll, .fade-load, .slide-up, .slide-left, .slide-right"
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// === 3. Page Transition Effect ===
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  const body = document.querySelector("body");

  // Buat overlay transisi
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "#0b132b";
  overlay.style.zIndex = "9999";
  overlay.style.opacity = "0";
  overlay.style.transition = "opacity 0.5s ease";
  body.appendChild(overlay);

  // Saat load halaman → hilangkan overlay
  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 500);
  }, 300);

  // Tambahkan efek saat berpindah halaman
  links.forEach((link) => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href.startsWith("#") && href.endsWith(".html")) {
          e.preventDefault();
          overlay.style.opacity = "1";
          setTimeout(() => {
            window.location.href = href;
          }, 400);
        }
      });
    }
  });
});

// === 4. Button Hover Glow Pulse ===
const glowButtons = document.querySelectorAll(".btn-glow");
glowButtons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.background = `radial-gradient(circle at ${x}px ${y}px, #fff, #f5c518 70%)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "#f5c518";
  });
});

// === 5. Smooth Scroll for Internal Links ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === 6. Parallax Effect (optional aesthetic) ===
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach((el) => {
    let offset = window.pageYOffset;
    el.style.backgroundPositionY = offset * 0.5 + "px";
  });
});

// === 7. Fade-in saat halaman load ===
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.6s ease";
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });
});


// === Efek scroll navbar ===
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// === Partikel glowing kecil ===
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.classList.add("particle-layer");
document.querySelector(".navbar").appendChild(canvas);

let particles = [];
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = 85;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 215, 0, 0.8)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// === Transisi antar halaman elegan ===
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.href.includes("#")) return; // biar link internal tetap jalan
    e.preventDefault();
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = link.href;
    }, 400);
  });
});

window.addEventListener("load", () => {
  document.body.style.opacity = 1;
  document.body.style.transition = "opacity 0.4s ease";
});

// Animasi muncul saat scroll
const items = document.querySelectorAll(".gallery-item");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.9;
  items.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.style.animation = "fadeIn 1s ease forwards";
    }
  });
});

// === Efek cahaya mengikuti kursor ===
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.pageX + "px");
  document.body.style.setProperty("--y", e.pageY + "px");
});

// === Efek muncul fade-up universal ===
const fadeEls = document.querySelectorAll(".fade-up, .gallery-item, section, h2, p");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.9;
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add("show");
  });
});

// === Efek Muncul Saat Scroll ===
const elements = document.querySelectorAll('.fade-in');
const onScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add('show');
  });
};
window.addEventListener('scroll', onScroll);
onScroll(); // Jalankan saat load


// === LIGHTBOX GALERI ===
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
