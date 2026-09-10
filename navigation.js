/* =========================================================
   Maggie Johnston — Portfolio
   navigation.js
   One shared file, linked on every page. Handles:
   - mobile menu open/close
   - highlighting the current page in the primary nav
   - writing the current year into the footer
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var primaryNav = document.querySelector(".nav-primary");

  // 1. Mobile menu toggle
  if (toggle && primaryNav) {
    toggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.textContent = isOpen ? "Close menu" : "Menu";
    });
  }

  // 2. Highlight the current page's link automatically.
  //    Every page just needs <a href="..."> — no per-page class needed.
  var currentPath = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll(".nav-primary a");

  navLinks.forEach(function (link) {
    var linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });

  // 3. Auto-fill the current year in any element with data-year
  var yearEls = document.querySelectorAll("[data-year]");
  var thisYear = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = thisYear;
  });

  // 4. Close the mobile menu if the window is resized back to desktop width
  window.addEventListener("resize", function () {
    if (window.innerWidth > 720 && primaryNav && primaryNav.classList.contains("is-open")) {
      primaryNav.classList.remove("is-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    }
  });
});
