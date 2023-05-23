$(function() {
    $('.navi>li').mouseover(function () {
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function() {
        $(this).find('.submenu').stop().slideUp(500);
    });


    $('.imglist img:gt(0)').hide()
    setInterval(function() {
        $('.imglist img:first-child')
            .fadeOut(500)
            .next('img')
            .fadeIn(500)
            .end()
            .appendTo('.imglist')
    },3000);

    
    $('.left_sec').hover(function () {
        $('.media').css('background-image','url(images/Media_left.jpg)')
    });
    $('.center_sec').hover(function () {
        $('.media').css('background-image','url(images/Media_center.jpg)')
    });
    $('.right_sec').hover(function () {
        $('.media').css('background-image','url(images/Media_right.jpg)')
    });









    
});