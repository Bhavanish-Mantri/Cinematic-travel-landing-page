const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".menu a");
const video = document.querySelector(".bg-video");

if (video) {
  video.muted = true;
  video.play().catch(() => {});
}

toggle.addEventListener("click", () => {
  menu.classList.add("active");
  menu.setAttribute("aria-hidden", "false");
});

closeBtn.addEventListener("click", () => {
  closeMenu();
});

menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

function closeMenu() {
  menu.classList.remove("active");
  menu.setAttribute("aria-hidden", "true");
}

