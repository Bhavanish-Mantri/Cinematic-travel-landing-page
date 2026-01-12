const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".menu a");
const video = document.querySelector(".bg-video");

// Video autoplay safety
if (video) {
  video.muted = true;
  video.play().catch(() => {});
}

// Open menu
toggle.addEventListener("click", () => {
  menu.classList.add("active");
  menu.setAttribute("aria-hidden", "false");
});

// Close menu (X button)
closeBtn.addEventListener("click", () => {
  closeMenu();
});

// Close menu when clicking any link
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Close menu on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

function closeMenu() {
  menu.classList.remove("active");
  menu.setAttribute("aria-hidden", "true");
}
