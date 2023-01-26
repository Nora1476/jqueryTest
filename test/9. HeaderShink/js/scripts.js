/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
script가 html 코드하단에 위치하고 있기 때문에 $(function(){     }); 코드 필요없음
*/

var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'images/logo.svg',
    $smallLogo = 'images/logo-shrink.svg';


    //윈도우 스크롤시 이벤트 scrollTop값이 100이상이고
    $window.scroll(function(){
      if($(this).scrollTop()>100){
        //$mainHeader에 클래스 shrink가 없다면
        if(!$mainHeader.hasClass('shrink')){
          $mainHeader.addClass('shrink');
          switchImages($smallLogo);
        }
      }else{  //윈도우 스크롤시 이벤트 scrollTop값이 100이하인데
          //$mainHeader에 클래스 shrink가 있으면 class없앰
          if($mainHeader.hasClass('shrink')){
            $mainHeader.removeClass('shrink');
            switchImages($defaultLogo);
          }
      }
    });

    function switchImages(newPath){
      var $logo = $('#logo');
      $logo.fadeOut(300, function(){
        $logo.attr('src',newPath);
        $logo.fadeIn(300);
      }); 
    }


/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

