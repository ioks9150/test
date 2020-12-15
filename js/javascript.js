$(document).ready(function () {

    $(window).on('scroll', function () {


        var scr = $(window).scrollTop();

        if (scr === 0) {
            $('#header').removeClass('on');
            $('#header .info .location').find('img').attr('src', 'images/location_h.png');
            $('#header .info .phone').find('img').attr('src', 'images/phone_h.png');
            $('#logo').find('img').attr('src', 'images/logo_h.png');
        } else {
            $('#header').addClass('on');
            $('#header .info .location').find('img').attr('src', 'images/location.png');
            $('#header .info .phone').find('img').attr('src', 'images/phone.png');
            $('#logo').find('img').attr('src', 'images/logo.png');
        }


    });








    $('.bxslider').bxSlider({
        controls: false,
        mode: 'fade',
        pager: 'ture',
        auto: 'ture',
        speed: '500',
        pagerCustom: '.pager'
    });



    $('.buttonbox>a').hover(function () {
            $(this).find('img').attr('src', 'images/arrow_r_h.png');
        },
        function () {
            $(this).find('img').attr('src', 'images/arrow_r.png');
        });



    $('.con2 ul>li>a').eq(0).hover(function () {
            $(this).find('img').attr('src', 'images/sec1_1.png');
        },
        function () {
            $(this).find('img').attr('src', 'images/sec1_1_g.png');
        });
    $('.con2 ul>li>a').eq(1).hover(function () {
            $(this).find('img').attr('src', 'images/sec1_2.png');
        },
        function () {
            $(this).find('img').attr('src', 'images/sec1_2_g.png');
        });
    $('.con2 ul>li>a').eq(2).hover(function () {
            $(this).find('img').attr('src', 'images/sec1_3.png');
        },
        function () {
            $(this).find('img').attr('src', 'images/sec1_3_g.png');
        });
    $('.con2 ul>li>a').eq(3).hover(function () {
            $(this).find('img').attr('src', 'images/sec1_4.png');
        },
        function () {
            $(this).find('img').attr('src', 'images/sec1_4_g.png');
        });
    $('.con2 ul>li>a').eq(4).hover(function () {
            $(this).find('img').attr('src', 'images/sec1_5.png');
        },
        function () {
            $(this).find('img').attr('src', 'images/sec1_5_g.png');
        });
    $('.con2 ul>li>a').eq(5).hover(function () {
            $(this).find('img').attr('src', 'images/sec1_6.png');
        },
        function () {
            $(this).find('img').attr('src', 'images/sec1_6_g.png');
        });




    $('.post-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev')
    });

    $('.post').css({
        width: '92%',
        margin: '0 4%'
    });





    $('.mainmenu>li').on('mouseover', function () {
        $(this).find('.submenu').stop().css({
            display: 'block'
        });
        $(this).children('a').addClass('on');
    }); /*클래스gnb의 바로 밑의 li의 자식요소중 클래스sub에게 slidedown */



    $('.mainmenu>li').on('mouseout', function () {
        $(this).find('.submenu').stop().css({
            display: 'none'
        });
        $(this).children('a').removeClass('on');
    });



    
    
    
    
    
    
    
    
    
    
    
    $(window).resize(function () {

        var width_size = window.outerWidth;

        if (width_size < 1279) {
            
            $('.post').css({
                height: '380px'
            });

        }
        if (width_size > 1280) {
            
            $('.post').css({
                height: '450px'
            });

        }

    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    






});
