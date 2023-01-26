var slides = $('.carousel').carousel();

$('.controls i:nth-child(1)').click(function(){
  slides.carousel('prev');
})
$('.controls i:nth-child(2)').click(function(){
  slides.carousel('next');
})