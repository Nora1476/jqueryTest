$(function () {

  //윈도우에 스크롤이 300px 이상 생기면 go_top이 스윽 나타남
  //윈도우에 스크롤이 300px 이상이 아니면 go_top이 스윽 사라짐
  $(window).scroll(function(e){
    e.preventDefault();
    if($(this).scrollTop()>=300){
      $('.go_top').fadeIn();
    }else{
      $('.go_top').fadeOut();
    }
  })
	
  $('.go-top').click(function(){
    $('html, body').stop().animate({scrollTop:0},500);
  })
});
