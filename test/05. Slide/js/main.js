$(function(){
  var slides = $('.slideshow img'),
      slideCount=slides.length,
      currnetIndex=0;

    // 해당시간이 지나면 한번만 할 일 
    //  setTimeout(할일, 1000);
    //  clearTimeout(timer);
    // 일정시간마다 할일 
    //  setInterval(할일, 1000);
    //  clearInterval(timer);

    //jquery 집합개체(object) 중 특정번째 요소 선택 .eq(숫자)


    slides.eq(currnetIndex).fadeIn();

    var timer = setInterval(showNextSlide, 3500);
    
    function showNextSlide(){
      //현재 슬라이드가 사라지고 다음 슬라이드가 나타남
      var nextIndex = (currnetIndex+1)%slideCount;
      
      slides.eq(currnetIndex).fadeOut();
      slides.eq(nextIndex).fadeIn();
      currnetIndex = nextIndex;
    }//showNextSlide

    function timeron(){
      setInterval(showNextSlide, 3500);
    }
    function timeroff(){
      clearInterval(timer);
    }
    
    slides.mouseover(function(){
      timeroff();
    }).mouseout(function(){
       timeron();
    })
    
      
      

})