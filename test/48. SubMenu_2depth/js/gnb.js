$(function(){

  var menu = $('#gnb > li');
  var wrap = $('#gnbWrap');
  var menuHeight = wrap.outerHeight();
  //console.log(menuHeight);
  var subMenu = menu.find('.sGnbArea ul li');
  var pageUrl = location.href;
  var activeMenu;  //sub페이지에서 클릭할때마다 바뀌는 a링크의 href를 담을 변수

  
  menu.mouseover(function(){
    //마우스를 올리면 on추가
    $(this).addClass('on').siblings().removeClass('on');

    //sGnbArea높이를 포함시키킨 #gnbWrap 높이로 변경
    var totalHeight = menuHeight + $(this).find('.sGnbArea').height();
    wrap.stop().animate({height:totalHeight});    
  })
  .mouseout(function(){
    menu.removeClass('on');
    wrap.stop().animate({height:menuHeight});
    onActive();
  })
  
  //마우스 올라간 sub메뉴에 글씨색깔 바뀌게
  subMenu.mouseover(function(){
    subMenu.removeClass('on');
    $(this).addClass('on');
  })
  .mouseout(function(){
    subMenu.removeClass('on');
    onActive();
  });


  subMenu.each(function(){
    var cm = $(this);
    var subUrl = cm.find('a').attr('href');
    var active = pageUrl.indexOf(subUrl);   //주소표시줄에 a링크의 href가 있으면  -1보다 큰 숫자가 나오고 없으면 -1을 반환 
    var blank = pageUrl.indexOf('#');    //주소표시줄에 a링크가 빈 링크인지 확인   -1보다 큰 숫자가 나오면 빈링크를 의미
    
    if(active > -1 && blank == -1) activeMenu = cm;   //주소에 a링크의 href가 포함되어있고, 빈링크가 아니라면
    //console.log(activeMenu);

  });

  onActive();
  function onActive(){
    if(activeMenu) activeMenu.trigger('mouseover');
  }

});