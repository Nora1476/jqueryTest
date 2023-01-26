
var slideIndex = 0;  //슬라이드 확인
var numSlide = $('.slider .slide').length;

//슬라이드 라이브러리 
const slideshow = new Siema({
  selector:'.slider',
  loop: true,
  startIndex: 0,
  draggable: true,
  threshold:200,
  duration:1000,
  perPage:1
});

//이전버튼 클릭이벤트 
$('.prev').click(function(){
  slideshow.prev();
  //slideIndex 하나씩 차감
  if(slideIndex > 0){
    slideIndex -= 1;
  }else{
    slideIndex = numSlide-1;
  }
  updateNav();
  //console.log(slideIndex);
})

//이후 버튼 클릭 이벤트 
$('.next').click(function(){
  slideshow.next();
  //slideIndex 하나씩 증가
  if(slideIndex < numSlide-1){
    slideIndex += 1;
  }else{
    slideIndex = 0;
  }
  updateNav();
  //console.log(slideIndex);
})

function updateNav(){
  $('.btn-nav').eq(slideIndex).addClass('active').siblings().removeClass('active');
}


//처음 열자마자 인덱스 첫번째로 실행
$('.btn-nav').eq(0).addClass('active');

// 인덱스를 클릭이벤트 
//index 클릭한 요소의 순번(인덱스)
$('.btn-nav').click(function(){
  var idx = $(this).index();
  slideshow.goTo(idx);
  $(this).addClass('active').siblings().removeClass('active');
})

/*
//4초마다 다음 슬라이드로 이동하도록 작성
//setInterval(할일_함수, 시간);
var timer;
function autoSlide(){
    timer = setInterval(function(){
    slideshow.next()
  },4000);
}
autoSlide();

$('.slider').mouseover(function(){
  clearInterval(timer);
}).mouseout(function(){
  autoSlide();
})
*/

