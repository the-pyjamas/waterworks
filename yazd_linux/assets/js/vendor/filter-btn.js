// /* email filter btn Js */
$(document).ready(function () {
    $(".inner-sidebar-toggle").on("click", function (e) {
        e.stopPropagation();
        $(".inner-sidebar-wrapper .inner-sidebar-main").toggleClass("open");
        $(".email-sidebar-overlay").toggleClass("active");
    });

    // Close when clicking overlay
    $(".email-sidebar-overlay").on("click", function () {
        $(".inner-sidebar-wrapper .inner-sidebar-main").removeClass("open");
        $(".email-sidebar-overlay").removeClass("active");
    });

    // Close when clicking anywhere in the app content area
    $(".app-content-area").on("click", function () {
        $(".inner-sidebar-wrapper .inner-sidebar-main").removeClass("open");
        $(".email-sidebar-overlay").removeClass("active");
    });

    // Close when clicking anywhere else on the document
    $(document).on("click", function () {
        $(".inner-sidebar-wrapper .inner-sidebar-main").removeClass("open");
        $(".email-sidebar-overlay").removeClass("active");
    });

    // Prevent clicks inside sidebar from closing it
    $(".inner-sidebar-main").on("click", function (e) {
        e.stopPropagation();
    });
});