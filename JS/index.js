// Aos
AOS.init();

// Header
// Hamburger Menu Functionality
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", function () {
  this.classList.toggle("hamburger--active");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  // Toggle aria-expanded attribute
  const expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);
});

// Close menu when clicking on overlay
overlay.addEventListener("click", function () {
  hamburger.classList.remove("hamburger--active");
  mobileMenu.classList.remove("active");
  this.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
});

// Close menu when clicking on a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("hamburger--active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Close menu when pressing Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hamburger.classList.remove("hamburger--active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});





