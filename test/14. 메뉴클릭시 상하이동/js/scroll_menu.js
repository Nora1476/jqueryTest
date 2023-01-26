$(function(){
   //각 세션이 현재 화면을 기준으로 상단에서의 거리
   //선택자.offset().top;

   //선택자 잡기  _ navbar메뉴, 각세션, 
   var $menu = $('#top_menu ul li'),
       $contents =$('#contents>div');


  //li에 on이라는 class가 있으면 글자색이 검정색으로 변하게끔 css가 설정되어있음
  //$menu를 클릭하면 해당 요소에만 클래스명 on이 추가되도록

  $menu.click(function(e){
    e.preventDefault();
    /* 
    $menu.removeClass('on'); //1 클래스명 일단 다 뺴고 
    $(this).addClass('on'); //   내가 클릭한 그놈한테만 class 추가함
    
    $(this).addClass('on').siblings().removeClass('on');  //2 
    */
   
    var idx = $(this).index();
    var section = $contents.eq(idx);
    var sectionDistance = section.offset().top;
    //section1 :0 section2:764 section3: 1528
   
    //선택자.scrollTop() 스트크롤양 확인
    //메뉴를 클릭하면 offset으로 확인된 양만큼 sectionDestance를 임의로 지정해줌
    //body로만 하면 안먹음  html과 두개를 같이 쓰거나 html만 선택자로 사용
    $('html, body').stop().animate({ scrollTop : sectionDistance });
  
  });




   /* 윈도우 스크롤이 생기면 constens들마다 할 일 
      각각의 화면 상단에서의 거리인sectionDistance 보다 
      스크롤양이 많은지 적은지를 따져서 메뉴 글자색을 변하게 해야함
      많다는 조건이 참이면 각소소마다 순번 변수명 idx에 저장
      그 순번에 해당하는 매뉴에만 클래스명 on을 추가
   */
   $(window).scroll(function(){  
    $contents.each(function(){
      if($(this).offset().top <= $(window).scrollTop()){  //contents를 반복하면서  각 contents의 offset().top값이 윈도의 스크롤 양보다 많은지 아닌지를 검사
        var idx = $(this).index();
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on');
      }
    })


  })

});


