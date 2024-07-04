$(".chart-btn").click(function() {
    const $class = $(this).attr("class").split(" ")[0];

    $(".chart-wrap." + $class).show().siblings(".chart-wrap").hide();
})