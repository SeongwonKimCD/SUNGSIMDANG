$(function() {
    
    $('.navi>li').mouseover(function () {
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function() {
        $(this).find('.submenu').stop().slideUp(500);
    });
    
    $('.totalmenu_btn').click(function () {
        $('#menu_modal').addClass('active')
        $('#bgvideo_filter').addClass('hidden')
        $('.bgvideo').addClass('hidden')
        $('section').addClass('hidden')
        $('.media').addClass('hidden')
        $('footer').addClass('hidden')
    });
    $('.close_btn').click(function () {
        $('#menu_modal').removeClass('active')
        $('#bgvideo_filter').removeClass('hidden')
        $('.bgvideo').removeClass('hidden')
        $('section').removeClass('hidden')
        $('.media').removeClass('hidden')
        $('footer').removeClass('hidden')
    });
    

    $('.modal_left li:nth-child(1)').mouseover(function () {
        $('.modal_left li:nth-child(2) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(3) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(4) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(1) a').css('color', '#333333');
        $('.modal_right').css('background', 'url(../images/menuimg_1.jpg) no-repeat center / contain');
        $('.modal_center').css('width', '20%');
        $('.modal_right').css('width', '40%');
        $('.modal_center').css('border-left', '1px solid rgba(170, 170, 170, 0.5)');
        $('.menu_one').addClass('active')
        $('.menu_two').removeClass('active')
        $('.menu_three').removeClass('active')
        $('.menu_four').removeClass('active')
    });
    $('.modal_left li:nth-child(2)').mouseover(function () {
        $('.modal_left li:nth-child(1) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(3) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(4) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(2) a').css('color', '#333333');
        $('.modal_right').css('background', 'url(../images/menuimg_2.jpg) no-repeat center / contain');
        $('.modal_center').css('width', '20%');
        $('.modal_right').css('width', '40%');
        $('.modal_center').css('border-left', '1px solid rgba(170, 170, 170, 0.5)');
        $('.menu_two').addClass('active')
        $('.menu_one').removeClass('active')
        $('.menu_three').removeClass('active')
        $('.menu_four').removeClass('active')
    });
    $('.modal_left li:nth-child(3)').mouseover(function () {
        $('.modal_left li:nth-child(1) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(2) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(4) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(3) a').css('color', '#333333');
        $('.modal_right').css('background', 'url(../images/menuimg_3.jpg) no-repeat center / contain');
        $('.modal_center').css('width', '0');
        $('.modal_right').css('width', '60%');
        $('.modal_center').css('border-left', 'none');
        $('.menu_three').addClass('active')
        $('.menu_one').removeClass('active')
        $('.menu_two').removeClass('active')
        $('.menu_four').removeClass('active')
    });
    $('.modal_left li:nth-child(3)').mouseout(function () {

    });
    $('.modal_left li:nth-child(4)').mouseover(function () {
        $('.modal_left li:nth-child(1) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(2) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(3) a').css('color', 'color: var(--light_fc);');
        $('.modal_left li:nth-child(4) a').css('color', '#333333');
        $('.modal_right').css('background', 'url(../images/menuimg_4.jpg) no-repeat center / contain');
        $('.modal_center').css('width', '20%');
        $('.modal_right').css('width', '40%');
        $('.modal_center').css('border-left', '1px solid rgba(170, 170, 170, 0.5)');
        $('.menu_four').addClass('active')
        $('.menu_one').removeClass('active')
        $('.menu_two').removeClass('active')
        $('.menu_three').removeClass('active')
    });

    setInterval(function() {
        $('.imglist').delay(2000);
        $('.imglist').animate({marginLeft:-946});
        $('.imglist').delay(2000);
        $('.imglist').animate({marginLeft:-1892});
        $('.imglist').delay(2000);
        $('.imglist').animate({marginLeft:0});
        $('.imglist').delay(2000);
    });

    $('.left_sec').hover(function () {
        $('.media').css('background','url(images/Media_left.jpg) no-repeat center / cover')
    });
    $('.center_sec').hover(function () {
        $('.media').css('background','url(images/Media_center.jpg) no-repeat center / cover')
    });
    $('.right_sec').hover(function () {
        $('.media').css('background','url(images/Media_right.jpg) no-repeat center / cover')
    });

    $('.menu_1').click(function () {
        $(this).addClass('on');
        $('.menu_2').removeClass('on');
        $('.menu_3').removeClass('on');
        $('.menu_4').removeClass('on');
    });
    $('.menu_2').click(function () {
        $(this).addClass('on');
        $('.menu_1').removeClass('on');
        $('.menu_3').removeClass('on');
        $('.menu_4').removeClass('on');
    });
    $('.menu_3').click(function () {
        $(this).addClass('on');
        $('.menu_1').removeClass('on');
        $('.menu_2').removeClass('on');
        $('.menu_4').removeClass('on');
    });
    $('.menu_4').click(function () {
        $(this).addClass('on');
        $('.menu_1').removeClass('on');
        $('.menu_2').removeClass('on');
        $('.menu_3').removeClass('on');
    });
    $('.menu_1').click(function () {
        $('.thumbnail_1').addClass('on');
        $('.thumbnail_2').removeClass('on');
        $('.thumbnail_3').removeClass('on');
        $('.thumbnail_4').removeClass('on');
        $('.p1').addClass('on');
        $('.p2').removeClass('on');
        $('.p3').removeClass('on');
        $('.p4').removeClass('on');
    });
    $('.menu_2').click(function () {
        $('.thumbnail_2').addClass('on');
        $('.thumbnail_1').removeClass('on');
        $('.thumbnail_3').removeClass('on');
        $('.thumbnail_4').removeClass('on');
        $('.p2').addClass('on');
        $('.p1').removeClass('on');
        $('.p3').removeClass('on');
        $('.p4').removeClass('on');
    });
    $('.menu_3').click(function () {
        $('.thumbnail_3').addClass('on');
        $('.thumbnail_1').removeClass('on');
        $('.thumbnail_2').removeClass('on');
        $('.thumbnail_4').removeClass('on');
        $('.p3').addClass('on');
        $('.p1').removeClass('on');
        $('.p2').removeClass('on');
        $('.p4').removeClass('on');
    });
    $('.menu_4').click(function () {
        $('.thumbnail_4').addClass('on');
        $('.thumbnail_1').removeClass('on');
        $('.thumbnail_2').removeClass('on');
        $('.thumbnail_3').removeClass('on');
        $('.p4').addClass('on');
        $('.p1').removeClass('on');
        $('.p2').removeClass('on');
        $('.p3').removeClass('on');
    });
    $('.left_sec .more_btn').click(function () {
        $('#modal_bg_1').addClass('on');
    });
    $('.center_sec .more_btn').click(function () {
        $('#modal_bg_2').addClass('on');
    });
    $('.right_sec .more_btn').click(function () {
        $('#modal_bg_3').addClass('on');
    });
    $('.modal_close').click(function () {
        $('#modal_bg_1').removeClass('on');
        $('#modal_bg_2').removeClass('on');
        $('#modal_bg_3').removeClass('on');
    });
});
