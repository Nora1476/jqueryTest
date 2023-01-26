$(function(){
  var container= $('.slideshow'),
      slideGroup = container.find('.slideshow_slides'),
      slides= slideGroup.find('a'),

      //좌우 arrow
      nav = container.find('.slideshow_nav'),
      //하단 포인터
      indicator = container.find('.indicator'),
      //slides의 개수 
      slideCount=slides.length,
      //slideGroup안에 slide태그를 넣는 html 그릇코드 지정
      indicatorHtml = '',
      currentIndex=0,
      duration = 500,
      easing = 'easeInOutExpo',
      interval = 3500,
      timer ;

      //1. 슬라이드를 가로로 배열
      //슬라이드 마다 할일 lefr 값이 100%, 200%, 300%.....
      slides.each(function(i){
       var newLeft = i*100 + '%';
       //슬라이드의 이미지들을 가로로 배열
        $(this).css({left:newLeft});

        // <a href="">1</a>
        // 2. slide개수만큼 돌면서 a링크 html코드로 만드는 반복작업진행
       indicatorHtml += "<a href=''>" + (i+1) + '</a>';
       //console.log(indicatorHtml);
      });//slide.each

       //3. slides 내 a링크 개수만큼 만들어진 indicatorHtml를 indicaror div안에 삽입
       //선택자.text(B); 선택자요소에 B의 내용을 글씨형태로 추가
       //선택자.html(B); 선택자요서의 B의 내용을 html형태로 추가
      indicator.html(indicatorHtml);


      //4. 처음 윈도우가 ready되었을때 미리 한번 실행시킴(양쪽 화살표 세팅)
       updateNav();

       //5. 자동슬라이드 실행
       startTimer();


      //updateNav가 할 일
      function updateNav(){
        var navPrev = nav.find('.prev');
        var navNext = nav.find('.next');
        //처음 currentIndex = 0,  이전버튼 안보이도록 (css disable로 클래스를 만들어둠)
        if(currentIndex==0){
          navPrev.addClass('disabled');
        }else{
          navPrev.removeClass('disabled');
        }

        //마지막 currentIndex = , 다음버튼이 
        if(currentIndex==slideCount-1){
          navNext.addClass('disabled');
        }else{
          navNext.removeClass('disabled');
        }

        /* 첫번째방법
        //모든 indicator에 active클래스 제거 후 재설정
        indicator.find('a').removeClass('active'); 
        //eq(숫자)
        indicator.find('a').eq(currentIndex).addClass('active');
        */

        /* 두번쨰 방법 */
        //원하는 요소에만 active를 추가하고 나머지들에서 active빼기
        indicator.find('a').eq(currentIndex).addClass('active').siblings().removeClass('active');

      }//updateNav
      


      
      //슬라이드 이동함수
      function goToSlide(index){
        //슬라이드 번호를 입려받아 해당 슬라이드로 이동
        slideGroup.animate({left:index*-100+'%'}, duration, easing);
        //현재 슬라이드의 위치를 다시 알려줌
        currentIndex = index;
        console.log(currentIndex);

        //슬라이드 이동할때 처음,마지막을 구분해서 검사해주는 함수
        //indicator 구분위해 태그에 class active넣는 기능도 포함
        updateNav();
      };//goToSilde


      
      //인티케이터로 이동하기
      indicator.find('a').click(function(e){
        e.preventDefault(); // 몇번째 슬라이드인지만을 알아오기위해 a링크의 기본기능을 막음
        var idx = $(this).index();
        //console.log(index);
        goToSlide(idx);
      });



      //좌우버튼을 클릭하면 할 일
      //다음버튼 클릭  c+1 > goToSlide(?);
      //이전          c-1 > goToSlide(?);
      nav.find('a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('prev')){
          goToSlide(currentIndex-1);
        }else{
          goToSlide(currentIndex+1);
        }
      });




      //컨테이너에 마우스가 올려졌을때, 나갔을떄 실행되는 이벤트
      container.mouseenter(function(){
        stopTimer();
      }).mouseleave(function(){
        startTimer();
      });

      //자동 슬라이드 함수
      function startTimer(){
        //일정 시간마다 할 일
        //setInterval(할일, 시간), clearInterval(이름)
        //할일(함수) function(){실제로 할 일}

        timer = setInterval(function(){
          //슬라이드의 나머지를 이용해 마지막슬라이드 다음에 다시 0되게 함
          var nextIndex = (currentIndex+1)%slideCount;
          
          goToSlide(nextIndex);
        }, interval);

      }
      //슬라이드 멈추는 함수
      function stopTimer(){
        clearInterval(timer);
      }


      

});