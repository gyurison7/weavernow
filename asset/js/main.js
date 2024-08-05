$(".project-btn-wrap button").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
})

// $(".chart-btn").click(function() {
//     $(this).addClass("active").siblings().removeClass("active");

//     const $class = $(this).attr("class").split(" ")[0];
//     $(".chart-wrap." + $class).show().siblings(".chart-wrap").hide();
// })
