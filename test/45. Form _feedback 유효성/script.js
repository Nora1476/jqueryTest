

var $btnSubmit = $("#btnSubmit"),
    $fields = $(".form-control"),
    imageURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/winter.jpg";


$('.img-bg-blur').foggy();
    
//submit 버튼 클릭이벤트
$btnSubmit.on("click", function () {

  $fields.each(function () {
    var value = $(this).val();
    if (value == "") {
      $(this).addClass("error");
      $(this).parent().find(".validation").show(500);
    }else{
      $(this).removeClass('error');
      $(this).parent().find(".validation").hide(500);
    }
  });//each

  var $errorCount = $('.error').length;
  //console.log($errorCount);
  if($errorCount>0){
    $btnSubmit.prop('disabled', true).text('폼을 완성해주세요.');
  }
});

//input 클릭이벤트 
$fields.click(function(){
  $(this).removeClass('error');
  $(this).parent().find(".validation").hide(500);
  $btnSubmit.prop('disabled', false).text('SEND');
})


//로드시 배경이미지 설정
$(window).ready(function(){
  //.img-bg{ background-image:url(이미지주소) }
  $('.img-bg').css({backgroundImage:'url('+ imageURL +')'}).fadeIn(1000);
});

