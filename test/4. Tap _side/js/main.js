$(function(){
    var $aside=$('aside'),
        $button=$aside.find('button'),
        $img = $button.find('img'),
        $duration=400;


    //선택자.addClass('a)  - 선택자에 'a' 클래스 추가
    //선택자.removeClass('a)  - 선택자에 'a' 클래스 삭제
    //선택자.toggle('a')
    //선택자.hasClass('a') - 조건문에서만 사용. a요소에 b라는 클래스. 있으면 ture, 없으면 false

    //속성변경하기, 속성가져오기
    //선택자.arrt('a') - 선택자의 속성값 가져오기

    //버튼 클릭했을때 aside 나오도록
    $button.click(function(){
      //$aside.stop().animate({left:'-70px'}, $duration);
      $aside.toggleClass('open');

      if($aside.hasClass('open')){
        $aside.stop().animate({right:'-70px'}, $duration, 'easeOutBack');
        $img.attr('src', 'img/btn_close.png');
      }else{
        $aside.stop().animate({right:'-350px'}, $duration, 'easeInBack');
        $img.attr('src', 'img/btn_open.png');
      }
    })     
})