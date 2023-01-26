$(function(){

  /*----------------- 1. 기본 사용 -----------------*/
  $('.basic_slider').bxSlider({
    mode:'horizontal',
    speed: 2000,
  });
  
  
  
  /*----------------- 2. 좌우 컨트롤 -----------------*/
  $('.control_slider').bxSlider({
    //controls: false  //좌우버튼 사용여부
    pager:false,
    nextText: '<i class="fa-solid fa-chevron-right"></i>',
    prevText: '<i class="fa-solid fa-chevron-left"></i>',
  });

  $('.img_control_slider').bxSlider({
    //controls: false,  //좌우버튼 사용여부
    pager:false,
    prevSelector: '.img_controls .imgcontrols .prev',
    nextSelector: '.img_controls .imgcontrols .next'
  });


  
  /*----------------- 3. 멀티플 슬라이드 -----------------*/
  $('.multiple_slider').bxSlider({
    pager:false,
    minSlides:2,
    maxSlides:4,
    moveSlides:1,
    slideWidth: 200,
    slideMargin:30,
  });



  /*----------------- 4. 현재슬라이드 구분하기  (bxslider : callbacks 사용) -----------------*/
  $('.active_slider').bxSlider({
    onSliderLoad:function(currentIndex){
      //console.log(currentIndex);
      $('.active_slider li').eq(currentIndex+1).addClass('active');

    },
    onSlideAfter:function($slideElement){  //슬라이드가 로드된 후 할 일   $slideElement 는 현재슬라이드를 가리키는것으로 bxsliser 라이브러리로 제공되는 변수
      $slideElement.addClass('active').siblings().removeClass('active');
    }
  });
  
  

  /*----------------- 5. 슬라이드 옵션 활용 이전, 다음, 슬라이드 이동  (bxslider : public method 사용) -----------------*/
  /*슬라이드자체를 변수명으로 지정해두어야 public method 사용가능  */
  var menualSlider = $('.manual_control_slider').bxSlider({
    pager:false,
    controls:false
  });

  $('.manual_controls span').click(function(){
    if($(this).hasClass('prev')){  
      //이전
      menualSlider.goToPrevSlide();
    }else{   
      //다음
      menualSlider.goToNextSlide();
    }
  })

  $('.manual_pager span').click(function(){
    var idx = $(this).index();
    menualSlider.goToSlide(idx);
  })


  
  /*----------------- 6. 동영상 슬라이드    (bxslider :General 안에 vedio속성 사용-----------------*/
  // $('.video_slides').bxSlider({
  //    video:true,
  //    onSliderLoad:function(currentIndex){
  //     $('.video_slides div').eq(currentIndex+1).find('video').get(0).play();
  //   },
  //   onSlideAfter:function($slideElement){  //슬라이드가 로드된 후 할 일   $slideElement 는 현재슬라이드를 가리키는것으로 bxsliser 라이브러리로 제공되는 변수
  //     $slideElement.siblings().find('video').get(0).pause();
  //     $slideElement.find('video').get(0).play();
  //   }

  // });
  
  

  
  /*----------------- 7. 탭 + 슬라이드 연동 -----------------*/
  
  //1. 첫번쨰 방법
  //실행시키는 순서 중요!  bxslide먼저 실행하고 난 뒤 해당 탭 외 나머지를 display:none; 으로 처리 될수 있도록
  $('.tab_slide').bxSlider();   
  $('.slide_tab').tabs();

  //2. 두번쨰 방법
  //jquery tab기능을 통해  display:none; 처리된 탭을 bxslider - Public Methods :reloadSlider 기능으로 리로드 
  // var tabSlide = $('.tab_slide').bxSlider();   
  // $('.slide_tab').tabs({
  //   activate: function( event, ui ) {
  //     tabSlide.reloadSlider();
  //   }
  // });





 
  /*----------------- 8. 자동 슬라이드 -----------------*/
  
  $('.auto_slider').bxSlider({
    auto:true,
    autoHover: true,
    autoControls: true,
    pause:2000
  })


})