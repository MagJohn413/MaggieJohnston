// Get the navigation elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

// Mobile menu toggle
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Smooth scrolling when clicking navigation links
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

        // Close mobile menu after clicking
        navLinks.classList.remove("active");
    });
});

// Highlight the section currently being viewed
const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
