
$("#more").on("click", function(){
    $("html, body").animate({
        scrollTop: $("#nav-main").offset().top
    }, 1000 );
});
