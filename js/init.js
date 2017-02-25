(function ($) {
    $(function () {
        $(".menu-button-collapse").sideNav();
        var buttons = document.getElementsByClassName("btn");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].ondragstart = function () {
                return false;
            };
        }
        buttons = document.getElementsByClassName("btn-large");
        for (i = 0; i < buttons.length; i++) {
            buttons[i].ondragstart = function () {
                return false;
            };
        }
    });
})(jQuery);

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        };
    i[r].l = 1 * new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-92540532-1', 'auto');
ga('send', 'pageview');

