$(function(){
  // 첫번쨰 메뉴에 마우스가 들어오면 header의 높이를 300px, .3s동안
  // 첫번째 메뉴에서 마우스가 떠나면 header높이를 50px, 0.3s동안
  
  var $firstMenu = $('nav > ul > li'),
      $header = $('header');

  $firstMenu.mouseenter(function(){
    $header.stop().animate({height:'300px'},300);
  })
  .mouseleave(function(){
    $header.stop().animate({height:'50px'},300);
  });

})