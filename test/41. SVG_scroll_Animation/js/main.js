$(function(){

  var notePad = $('.notepads');

  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
      //notePad.add($('.st4')).addClass('animate ');
      notePad.addClass('animate ');
    }else{
      //notePad.add($('.st4')).removeClass('animate');
      notePad.removeClass('animate');
    }
  })
	
});


