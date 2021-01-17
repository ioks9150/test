$(document).ready(function () {


$('#fullpage').fullpage({
    'verticalCentered' : false,
//풀페이지 js css파일은 기본적으로 페이지의 가로축이
//가운데서부터 시작을 한다. 그래서 그것을 리셋시킴
    'navigation' : true,
//풀페이지 기본값에는 페이저버튼이 나타나지 x 
    'navigationPosition':'right',
//네비게이션 위치
    'navigationTooltips' :['Main','Profile','Web','Visual Design','Editorial Design'],
//네비게이션에 섹션에 관한 캡션을 넣는 부분
    'afterLoad' : function(i,f,d){
                    //인덱스, 목적지, 방향
        if(f===3){
            $('.box').addClass('on');
        }else{
            $('.box').removeClass('on');
        }

    },
    //func.afterLoad
//페이지가 로딩이 되고 난 후 일어날 일

'onLeave' : function(i,f,d){
    
    if(i===3 && d==='down'){
        $('.item').addClass('on').removeClass('active');
    }
    if(i===5 && d==='up'){
        $('.item').addClass('active').removeClass('on');
    }
 //다른페이지에서부터 본페이지로 이동을 할 때 일어날 일
}//func.onLeave

});

    
    
 $('#fullpage #sec03.active').parents().siblings('#header').find('.logo>a').css({
     backgroundColor : 'red'
 })   
    
    
    $('#target1').waypoint(function() {
    $('#target1').addClass('animated fadeInDown');
}, { offset: '100%' });

    
    
    
    
});
