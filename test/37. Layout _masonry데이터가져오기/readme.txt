1. imagesLoaded
    - https://imagesloaded.desandro.com/masonry (라이브러리와 비슷)
    - 다운로드 및 cdn적용시켜 라이브러리 사용

      $('#container').imagesLoaded( function() {
        // images have loaded
      });

      // options
      $('#container').imagesLoaded( {
        // options...
        },
        function() {
          // images have loaded
        }
      );

2. masonry 라이브러리 로드


3. 순수문자열
    -> jquery 문법 -> jquery object $() 
    -> 태그형식으로 추출(dom 요소로 변환) $(...).get(0)   _태그속성 자체의 요소를 가져옴
        ex)  jquery video, audio 재생할때 (...).get(0).play()
























      -A.next()
      -A.before()
      -A.prev()
      -A.after()
      -A.siblings()
      -A.filter('.active')   선택자 A중에 class명이 acive인것
      -A.find('.active')     A자식 중에 class 이름이 active인 것  
      -A.childeren()         A의 자식
      -A.parent()            A의 부모
      -A.closetst('div')     A의 가장 가까운 div부모
