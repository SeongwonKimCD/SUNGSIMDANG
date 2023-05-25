$(function() {
    $('.tab_slider').slick({
        arrows: false,
        initialSlide : 6,
        speed: 300,
        infinite: false,
        autoplay:false,
        dots:false,
        slidesToShow:7,
        slidesToScroll:3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 7,
                slidesToScroll: 3,
                infinite: false,
                dots: false
                }
            }
        ]
    });
    $("#prev3").click(function () {
        $(".tab_slider").slick("slickPrev");
    });
    $("#next3").click(function () {
        $(".tab_slider").slick("slickNext");
    });
});