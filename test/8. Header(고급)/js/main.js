$(function () {
  var $window = $(window),
      $header = $('.page-header'),
      $headerClone = $header.contents().clone(),    //header는 제외한 안애 내용물만 복사
      $headerCloneContainer = $('<header class="page-header-clone" role="banner"></div>'),
      $threshold = $header.offset().top + $header.outerHeight();

      //A.append(B);
      //새로만들어서 객체화시켜 변수에 담아둔 header안에 원래 header의 내용물 복사해서 넣음
      $headerCloneContainer.append($headerClone);

      //A.appandTo(B);
      $headerCloneContainer.appendTo('body');
      console.log($headerCloneContainer);

       //throttle 브라우저가 scroll을 검사하는 빈도를 1초에 15번만 하도록 부담을 줄여줌
      $window.scroll($.throttle(1000/15,function(){ 
        if($(this).scrollTop()>=$threshold){
          $headerCloneContainer.addClass('visible');
        }else{
          $headerCloneContainer.removeClass('visible');
        };
      }));

});
