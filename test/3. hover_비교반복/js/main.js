$(function(){
    var $duration = 300;
    var $button = $('.inner button');  // 선택자로 선택된 모든버튼이 배열형태로 변수에 담김
    
    //버튼들의 높이를 설정  -40  0  40  80  120....
    //js 요소들 마다 할일
    //js 문법 사용
    /*
    var $buttons = document.getElementsByTagName('button');
    for (var i=0; i<=$buttons.length; i++){
        $buttons[i].style.top= i*40-40 +'px';
    }
    */

    //jQuery 
    $button.each(function(idx){    
      //console.log(idx); //인덱스 번호를 물고들어오면서 콘손에 찍힘
      $(this).css({top:idx*40-40 +'px'});
    }).mouseover(function(){
      $(this).stop().animate({backgroundColor:'yellow',color:'#000'},$duration);
      $(this).find('img:first-child').stop().animate({opacity:0},$duration);
      $(this).find('img:nth-child(2)').stop().animate({opacity:1},$duration);
    }).mouseout(function(){
      $(this).stop().animate({backgroundColor:'white',color:'#01b169'},$duration);
      $(this).find('img:first-child').stop().animate({opacity:1},$duration);
      $(this).find('img:nth-child(2)').stop().animate({opacity:0},$duration);
    });

});
