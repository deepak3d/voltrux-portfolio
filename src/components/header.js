/* header.js - Voltrux Motors Header Component */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const header = document.querySelector(".header");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("header__mobile-nav--active");
      toggle.classList.toggle("header__menu-toggle--active");
      toggle.setAttribute("aria-expanded", mobileNav.classList.contains("header__mobile-nav--active"));
    });
  }

  window.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > 50);
  });
});