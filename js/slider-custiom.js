$(function() {
    $('.imgslider').slick({
        arrows: false,
        infinite: true,
        autoplay:true,
        dots:false,
        slidesToShow:4,
        slidesToScroll:1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 1130,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
    $("#prev1").click(function () {
        $(".imgslider").slick("slickPrev");
    });
    $("#next1").click(function () {
        $(".imgslider").slick("slickNext");
    });

    
    $('.sliderstyle_two').slick({
        arrows: false,
        speed: 300,
        infinite: true,
        autoplay:false,
        dots:false,
        slidesToShow:6,
        slidesToScroll:3,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1130,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
    $("#prev2").click(function () {
        $(".imgslider2").slick("slickPrev");
    });
    $("#next2").click(function () {
        $(".imgslider2").slick("slickNext");
    });

    $('.tab_slider').slick({
        arrows: false,
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