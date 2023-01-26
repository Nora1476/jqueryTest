var $button = $('.gallery a'),
    $target = $('#lightbox_overlay'),
    $targetImg = $target.find('img');

    /*
    $button 클릭하면
    변수명 newImg 속성명 data-lightbox의 값을 변수명 newImg에 저장
    #lightbox-overlay에 클래스명 visible을 추가
    #lightbox-overlay img요소의 src속성의 값을 newImg로 변경
    */

  $button.click(function(e){
    e.preventDefault();
    var $newImg = $(this).find('img').attr('data-lightbox');
    //console.log($newImg);

    $target.addClass('visible');
    $target.find('img').attr('src', $newImg);
  });

  $target.click(function(){
    $(this).removeClass('visible');
  });
