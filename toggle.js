// ===== Active nav link on scroll =====
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 70) current = section.getAttribute("id");
  });

  navLi.forEach(li => {
    li.classList.remove("active");
    if (li.querySelector("a").getAttribute("href").includes(current)) {
      li.classList.add("active");
    }
  });
});

// ===== Reveal animations on scroll =====
const revealElements = document.querySelectorAll("[data-animate]");
const revealOnScroll = () => {
  const trigger = window.innerHeight / 1.2;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== Mobile menu toggle =====
const menuToggle = document.querySelector(".mobile-nav-toggle");
const navbar = document.getElementById("navbar");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// ===== Light/Dark Mode Toggle =====
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
});

window.addEventListener("load", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "light") body.classList.add("light");
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
