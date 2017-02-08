(function ($) {
    $(function () {
        // Enable the side navigation menu
        $(".menu-button-collapse").sideNav();

        // Set the active navigation button if possible
        var navbar = document.getElementsByTagName("nav")[0];
        // There should no more than one navigation bar
        if (navbar) {
            var selected_nav_btn = navbar.getAttribute("data-selected");
            // One of: ["nav_features", "nav_services", "nav_company", "nav_career"]
            if (selected_nav_btn) {
                selected_nav_btn = document.getElementById(selected_nav_btn);
                if (selected_nav_btn) {
                    selected_nav_btn.setAttribute("class", "active"); // set active
                }
            }
        }

    });
})(jQuery);
