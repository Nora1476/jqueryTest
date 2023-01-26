$(function(){

  var progressBar = $('.progress-bar').find('.bar'),
      progressText =  $('.progress-bar').find('.rate');
      progressRate = progressText.attr('data-rate');

  var excuted = false;  //스크롤 할때마다 함수가 중복실행되지 않고 한번만 실행되도록 설정

  $(window).scroll(function(){
    var threshold = progressBar.offset().top-400;

    if(!excuted) {
      if($(window).scrollTop() >= threshold){
        //bar animate 2.5s width가 바뀌는 애니메이트
        progressBar.animate({width:progressRate+'%'}, 2500);
      
        $({percent:0}).animate({percent:progressRate},{
          duration:2500,
          progress:function(){
            var now = this.percent;
            progressText.text(Math.ceil(now)+'%');
          }
        })
      }
      excuted = true;
    } 
  })
  
})
