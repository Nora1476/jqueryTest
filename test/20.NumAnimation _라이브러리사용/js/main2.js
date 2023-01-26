$(function(){

  var excuted = false;
  $('.section2').waypoint(function(){  //  waypoint 라이브러리 : 윈도우에서 클리스가 section2인 요소가 화면에 나타날 즈음에 실행할 동작
    
    var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
    var targetNumber = $('.animate').attr('data-rate');
    if(!excuted){
      $('.animate').animateNumber(
        {
          number:targetNumber,
          numberStep: percent_number_step
        },2500);  // animateNumber라이브러리
      excuted = true;  //스크롤할때마다 반복 실행되지 않도록
    }
  },
  {
    offset:'80%'  // animate요소가 스크린에서 꼴딱 넘어가기전에 실행되도록 설정
  });

})