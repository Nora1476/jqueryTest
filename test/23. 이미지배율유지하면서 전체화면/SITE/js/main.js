$(function(){

  var container = $('.full-bg');

  $(window).resize(function(){
    var currentWindow = $(this),
        windowWidth = currentWindow.width(),  //현재 브라우저창의 가로 알맹이 길이(패딩, 보더값 포함x)
        windowHeight = currentWindow.height(),  //현재 브라우저창의 세로 알맹이 길이(패딩, 보더값 포함x)
        broswerRatio = windowWidth/windowHeight,  // 현재 브라우저의 브라우저의 비율
        imageRatio = 854/480;

    if(imageRatio > broswerRatio){  
      //이미지의 비율이 브라우저의 비율보다 클때( 브라우저의 세로길이가 이미지보다 클때 )
      container.css({
        height: '100%',
        width: windowHeight * imageRatio, //현재이미지의 높이(브라우저의 높이) * 원래 이미지의 비율
        top:0,
        left: (windowWidth - windowHeight * imageRatio)/2 //(브라우저너비 - 이미지너비)/2
      })
    }else{
      //이미지의 비율이 브라우저의 비율보다 클때( 브라우저의 가로길이가 이미지보다 클때 )
      container.css({
        height: windowWidth/imageRatio, //(이미지 너비/ 이미지 비율)
        width: '100%',
        top: (windowHeight-windowWidth/imageRatio )/2,
        left:0, 
      })
    }

  })//resize
  
  $(window).trigger('resize');

})//document ready