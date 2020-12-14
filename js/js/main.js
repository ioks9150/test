$(document).ready(function(){
    var winInner = window.innerHeight;


 $('.scrolldown').on('click',function(){

    $('body, html').animate({

        'scrollTop' : winInner
    },1000)

    
 });


 $('.row1In').bxSlider({
     controls : false,
     pager:false,
     auto:true,
     pause:2000
 });

 $('.row4box').bxSlider({
    controls : false,
    mode : 'fade',
    pagerCustom : '.pager'
 });




$(window).on('scroll',function(){


    var scr = $(window).scrollTop();

    if(scr === 0){
        $('header').addClass('on');
    }else{
        $('header').removeClass('on');
    }


});

function imgVal(){
    var imgHt = $('.showroom').children('img').eq(0).height();

$('.servicecenter').children('img').height(imgHt)

}

imgVal();
$(window).resize(imgVal)

});//opening