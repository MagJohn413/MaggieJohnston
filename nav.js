// ================================
// WEBSITE NAVIGATION
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const navigation = `
        <header>

            <div class="header-top">

                <div class="logo">
                    <a href="index.html">Logo</a>
                </div>

                <div class="header-info">

                    <div class="header-description">
                        <p>
                            This area is for informational graphics
                            which describe what your site is about.
                        </p>
                    </div>

                    <nav class="primary-nav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>

                    <nav class="secondary-nav">
                        <ul>
                            <li><a href="news.html">News</a></li>
                            <li><a href="resources.html">Resources</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                        </ul>
                    </nav>

                </div>

            </div>

        </header>
    `;

    // Find the navigation container
    const navContainer = document.getElementById("navigation");

    // Insert navigation
    if (navContainer) {
        navContainer.innerHTML = navigation;
    }

});
