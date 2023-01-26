
$('input').click(function(){
  $(this).attr('placeholder','');
  $(this).prev().addClass('label-top');
})