$(function () {
  
  var wind = $(window),
      header= $('.page-header'),
      headerOffsetTop = header.offset().top; //화면상단에서 부터 떨어진 높이
      //console.log(headerOffsetTop);

      //스크롤의양 _ scrollTop()
      //화면상단에서의 거리 _ offset.top 

  wind.scroll(function(){
    if(wind.scrollTop() >= headerOffsetTop){ //윈도우 자체의 스크롤양이 header가 화면상단에서 떨어진 위치보다 많은지 아닌지를 확인
      header.addClass('sticky');
    }else{
      header.removeClass('sticky');
    }
  });

});
