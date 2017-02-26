const checkBar = function (element, originalY) {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= originalY) {
        element.addClass("fixed-bar")
    } else {
        element.removeClass("fixed-bar");
    }
};
const url = window.location.href;
const divider = url.lastIndexOf('/');
const contextRoot = url.substring(0, divider);
var path, anchor;
if (url.indexOf('#') >= 0) {
    const index = url.lastIndexOf('#');
    path = url.substring(divider, index);
    anchor = url.substring(index);
} else {
    path = url.substring(divider);
}
(function ($) {
    var element = $(".follow-scroll");
    var originalY = element.offset().top;
    $(window).on("scroll", function () {
        checkBar(element, originalY);
    });
    const $navTabs = $('#nav-tabs');
    $navTabs.tabs();

    const $aboutUs = $("#about-us-btn");
    const $support = $("#support-btn");
    const $contact = $("#contact-btn");
    $aboutUs.click(function () {
        window.location.href = contextRoot + path + "#about-us";
    });
    $support.click(function () {
        window.location.href = contextRoot + path + "#support";
    });
    $contact.click(function () {
        window.location.href = contextRoot + path + "#contact";
    });
    $("#about-us-footer").click(function () {
        $aboutUs.trigger("click");
    });
    $("#support-footer").click(function () {
        $support.trigger("click");
    });
    $("#contact-footer").click(function () {
        $contact.trigger("click");
    });

    checkBar(element, originalY);
    if (anchor) {
        $(anchor + "-btn").trigger('click');
    }
})(jQuery);