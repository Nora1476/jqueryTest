
/*  
//순수 제이쿼리만 이용하여 아코디언 효과 구현
$('.question').click(function(){
  $(this).next().slideToggle().siblings('.answer').slideUp();
})
*/


//제이쿼리UI 사용하여 아코디언 효과 구현
$( ".qna_list" ).accordion();