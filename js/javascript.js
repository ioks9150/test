$(document).ready(function(){
    

    $('.bxslider').bxSlider({
        controls : 'ture',
        mode : 'fade',
         pager : 'ture',
         auto: 'ture',
         speed: '500',
        pagerCustom : '.pager'
     });

    
    
    
    $('.buttonbox>a').mouseover(function(){
        $(this).find('img').attr('src','images/arrow_r_h.png');
    });
    $('.buttonbox>a').mouseleave(function(){
        $(this).find('img').attr('src','images/arrow_r.png');
    });
    
    
    
    


   $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow:$('.next'),
      prevArrow:$('.prev'),
    });
    
    
    $('.mainmenu>li>a').mouseover(function(){
        $(this).find('.submenu').css({
            'display' : 'block',
        });
    });
    
    
    
    
    
    
    
});