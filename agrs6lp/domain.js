document.addEventListener("DOMContentLoaded", () => {
    const url = new URL(window.location.href);
    const domain = url.searchParams.get("domain");
    const links = document.querySelectorAll("a");

    if (domain) {
        // If domain exists → set click URL
        links.forEach(link => {
            if (!link.href || link.getAttribute("href") === "#" ) {
                link.href = `https://${domain}/click`;
            }
        });
    } else {
        // If no domain → disable links
        links.forEach(link => {
            link.removeAttribute("href");
            link.onclick = e => e.preventDefault();
        });
    }
});
