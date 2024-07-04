$(function () {
    const currentPath = window.location.pathname;
    $(".menu-list a").each(function () {
        const href = $(this).attr("href");
        const newHref = new URL(href, window.location.href).pathname;

        if (newHref === currentPath) {
            $(this).closest(".menu-list").addClass("active");
        }
    });
});
