$(function(){
    var $duration = 300;
    var $images =$('#images p');
    
    //첫번쨰 캡션, span animate 매서드  
    $images.filter(':nth-child(1)').mouseover(function(){
        $(this).find('span, strong').stop().animate({opacity:1}, $duration);
    }).mouseout(function(){
        $(this).find('span, strong').stop().animate({opacity:0}, $duration);
    });

    // js선택자로 선택할 경우
    //#images p:nth-child(2) 
    //위 $images =$('#images p') 까지 변수로 설정되어있음
    //뒤에 :nth-child(2) 선택하여 가져옴     filter로 걸러서 가져옴
    $images.filter(':nth-child(2)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, $duration);
        $(this).find('strong').stop().animate({opacity:1,left:0}, $duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, $duration);
        $(this).find('strong').stop().animate({opacity:0,left:'-200%'}, $duration);
    });


    $images.filter(':nth-child(3)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, $duration);
        $(this).find('strong').stop().animate({opacity:1,bottom:0}, $duration);
        $(this).find('img').stop().animate({top:'-40px'}, $duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, $duration);
        $(this).find('strong').stop().animate({opacity:1, bottom:'-80px'}, $duration);
        $(this).find('img').stop().animate({top:'0px'}, $duration);
    });

})