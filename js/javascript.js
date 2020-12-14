$(document).ready(function(){
    

    $('.bxslider').bxSlider({
        controls : 'ture',
        mode : 'fade',
         pager : 'ture',
         auto: 'ture',
         speed: '500',
        pagerCustom : '.pager'
     });

    
    
    $('.buttonbox>a').hover(function () {
            $(this).find('img').attr('src','images/arrow_r_h.png');
        },
        function () {
            $(this).find('img').attr('src','images/arrow_r.png');
        });
    
    
    
    
    
    
    


   $('.post-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow:$('.next'),
      prevArrow:$('.prev'),
//       css({
//           width : '32%'
//       });
    });
    
    

    

    
        $('.mainmenu>li').on('mouseover',function(){
            $(this).find('.submenu').stop().css({
                display : 'block'
            });
            $(this).children('a').addClass('on');
        });/*클래스gnb의 바로 밑의 li의 자식요소중 클래스sub에게 slidedown */
        

        
        $('.mainmenu>li').on('mouseout',function(){
            $(this).find('.submenu').stop().css({
                display : 'none'
            });
            $(this).children('a').removeClass('on');
        });
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});