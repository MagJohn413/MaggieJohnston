// Reusable navigation system for GitHub Pages

function loadNavigation() {
    const primaryNavItems = [
        { name: "Home", link: "index.html" },
        { name: "About", link: "about.html" },
        { name: "Services", link: "services.html" },
        { name: "Contact", link: "contact.html" }
    ];

    const secondaryNavItems = [
        { name: "FAQ", link: "faq.html" },
        { name: "Support", link: "support.html" },
        { name: "Blog", link: "blog.html" }
    ];

    // Build primary nav
    const primaryNav = document.createElement("nav");
    primaryNav.className = "primary-nav";
    primaryNav.innerHTML = `
        <ul>
            ${primaryNavItems
                .map(item => `<li><a href="${item.link}">${item.name}</a></li>`)
                .join("")}
        </ul>
    `;

    // Build secondary nav
    const secondaryNav = document.createElement("nav");
    secondaryNav.className = "secondary-nav";
    secondaryNav.innerHTML = `
        <ul>
            ${secondaryNavItems
                .map(item => `<li><a href="${item.link}">${item.name}</a></li>`)
                .join("")}
        </ul>
    `;

    // Insert into page
    const header = document.querySelector("header");
    header.appendChild(primaryNav);
    header.appendChild(secondaryNav);
}

// Load navigation when page is ready
document.addEventListener("DOMContentLoaded", loadNavigation);
