document.addEventListener("DOMContentLoaded", () => {

    const primaryNav = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="products.html">Portfolio</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="https://canva.link/resume-maggie-j" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
    `;

    const secondaryNav = `
        <ul>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
        </ul>
    `;

    document.getElementById("primary-nav").innerHTML = primaryNav;
    document.getElementById("secondary-nav").innerHTML = secondaryNav;
});
