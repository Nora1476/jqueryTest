$(function(){
  /* 첫번쨰 메뉴에 마우스가 들어오면 
      마우스가 들어온 그 서브메뉴의 높이를 변수명 subHeader로 저장하고 
      기존 header의 높이를 더한값을 header의 높이로 .3s걸쳐 애니메니트 되도록
  // 첫번째 메뉴에서 마우스가 떠나면 header높이를 50px, 0.3s동안 */
  
  var $firstMenu = $('nav > ul > li'),
      $header = $('header');
      $headerHeight = $header.outerHeight();

  //선택자.height() _ 선택자 자체 알맹이의 높이
  //선택자.innerHeight() _ 선택자 패딩까지의 높이
  //선택자.outerHeight() _ 선택자 border까지의 높이
  //선택자.outerHieght(true) _ 선택자 margin까지의 높이


  $firstMenu.mouseenter(function(){
    var currentMenu = $(this);
    var subHieght = currentMenu.find('ul').outerHeight();
    $header.stop().animate({height: $headerHeight+subHieght + 'px'},300);
    //setTimeout(할일, 시간);
    setTimeout(function(){
      currentMenu.find('ul').show();
    },300)
  })
  .mouseleave(function(){
    $header.stop().animate({height:$headerHeight+'px'},300);
    $(this).find('ul').hide();
  });

})