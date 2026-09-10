```javascript
// =========================
// MAGGIE JOHNSTON PORTFOLIO
// Navigation JavaScript
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // Highlight the current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });

    });

});
```
