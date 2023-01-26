$(function () {
  var container = $('.work-section'),
      navItems = $('.tabs-nav li'),
      highLight = $('.tabs-highlight');
     
      /* 첫번쨰 방법 jquery ui 옵션사용방법
      container.tabs({
        //jquery ui - show에서 동작 효과설정 가능
        show: { duration: 120 },
        hide: { duration: 120 },
        create: moveHighLihgt,   //열자마자 현재 활서화된 탭에서 할 일
        activate: moveHighLihgt // 클릭해서 새로운탭이 활성화되면 할 일
      });

      function moveHighLihgt(event, ui){
        //활성화되어있는 li
        //열자마자 활성화된 탭(li)  ui.tab,  클릭해서 활성화된 탭 ui.newTab  
        //두 값중에 하나만 활성화 되어도 변수에 저장됨
        var newNavItem =  ui.tab||ui.newTab;  
        var newLeftValue = newNavItem.position().left;
        
        //tabs-highlight에 새로운 left값으로 animate
        //대상.animate({속성:값}, 시간, 이징, 다른 할일)
        highLight.animate({left:newLeftValue}, 300);
      }
      */

       /* 두번쨰 방법  */
       container.tabs({
        //jquery ui - show에서 동작 효과설정 가능
        show: { duration: 120 },
        hide: { duration: 120 },
      });

      //navItems를 클릭하면 그 요소의 left갑슬 변수 newLeftValue에 담고, highLight가 움직이도록
      navItems.click(function(){
        var newLeftValue = $(this).position().left;
        highLight.animate({left:newLeftValue}, 300);
      })
      navItems.eq(0).trigger('click');

});
