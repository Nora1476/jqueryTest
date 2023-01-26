$(function() {
	
  //recent post slideshow
  $('.posts_list').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideWidth:370,
    slideMargin : 30,
    pager:false,
    nextSelector: '.recent_posts .controls .next',
    prevSelector :'.recent_posts .controls .prev' 
  });
  
  //Mobile 메뉴
  $(".toggle").click(function(){
    $(".main-menu").slideToggle();
  }); 
  
  //사이즈변경시 메뉴
  $(window).resize(function(){
    if($(window).width() > 768){
      //참이면 할일
      $(".main-menu").show();
    } else{
      //거짓이면 할일
      $(".main-menu").hide();
    }
  });				
	
  //상단메뉴 고정
  var $header = $('header');
  var $services = $('.services');
  var $counters = $('.counters');
  var $counterData = $counters.find('h3');

  var $serviceExcuted = false;  //한번 나타나면 사라지지 않도록
  var $counterExcuted = false;  //스크롤 함수 안에서 변수지정하면 스크롤할때마다 초기화됨

  $(window).scroll(function(){ //window에 스크롤이 생길때 

    var $currentSct = $(this).scrollTop();
    var $offset = 400;

    if($currentSct>0){  
      $header.addClass('sticky');
    }else{
      $header.removeClass('sticky');
    }

    //service-itme 나타나기
    var $serviceThreshold = $services.offset().top -$offset ;

    if(!$serviceExcuted){
      //console.log(serviceThreshold);
      if($currentSct > $serviceThreshold){
        $services.addClass('active');
        $serviceExcuted = true;
      }
    }

    //숫자 애니메이션
    var $counterThreshold = $counters.offset().top -$offset ;
    if(!$counterExcuted){
      //console.log(serviceThreshold);
      if($currentSct > $counterThreshold){

        $counterData.each(function(){  //counter 안에 각각 h3에 할일을 반복문을 이용하여 정해줌
          var $current= $(this);
          var $target = $current.attr('data-rate');
          
          //animate, progress, rate
          $({rate:0}).animate({rate :$target},{
            duration: 2500,
            progress:function(){
              var now = this.rate;
              $current.text(Math.ceil(now));  //$(this)를 사용하게되면 h3태그를 가리키는게 아니라 반복문 자체를 가리키게 됨. 그래서 current 변수로 따로 잡아줌
              $counterExcuted=true;
            }
          });

        })
      }
    }

  })//scroll event


  //#video icon을 클릭하면 overlay가 실행되도록 
  var currentUrl = $('iframe').attr('src');
  
  $('.video .icon').click(function(e){
    e.preventDefault();
    //alert('클릭');
    $('#overlay').addClass('visible'); 

    var newStr = '?autoplay=1'; //유투브영상 오토플레이 할 수 있도록 iframe src주소 끝에 붙일 문자열
    var newUrl = currentUrl.concat(newStr);  // 문자 합치기

    $('iframe').attr('src', newUrl);

  })
  $('.video .close').click(function(e){
    e.preventDefault();
    $('#overlay').removeClass('visible');
    var newUrl2 = currentUrl.replace('?autoplay=1',''); //currentUrl 중에 전자에 해당하는 문자를 후자로 바꿈
    $('iframe').attr('src', newUrl2);
  })


});//ready(function)


