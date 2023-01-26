//animation
//선택자.animation({속성:값, 속성:값}, 시간, 이징, 다른할일);
//animate는 px과 같이 수치가 바뀌는 것만 가능 (배경색과같은 수치변화가 없는 것은 jquery UI cdn 필요)

$(function(){
    $('#typo .inner').click(function(){
        //선택자.animation({속성:값, 속성:값}, 시간, 이징, 다른할일);
        $(this).animate({opacity:0, fontSize:'0px'}, 1500, 'easeInOutElastic',function(){
            $(this).animate({opacity:1, fontSize:'110px'},500);
        });
    });

    
    $('.testAni').mouseover(function () { 
        $(this).stop(true).animate({backgroundColor:'blue'},500); 
     }).mouseout(function () { 
         $(this).stop(true).animate({backgroundColor:'green'},500);
     });;
 

});