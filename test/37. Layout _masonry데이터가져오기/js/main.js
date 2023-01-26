$(function () {
  var $container = $('.gallery');

  /* container를  masonry형태로 배열하는 라이브러리 사용 */
  $container.masonry({
    //option
    itemSelector:'.gallery-item',
    columnWidth:230,
    gutter:10
  })

  $.getJSON('./data/content.json', function(data){
    var elements = [];

    //getJSON으로 가져온 데이터 하나하나마다 할 일
    var itemHTML = 
    $.each(data, function(i, item){
      var itemHTML =
      '<li class="gallery-item is-loading">' +   // masonry라이브러리 is-loading 클래스 명이 추가되어있을경우 - 이미지 보이지 않음 
        '<a href="' + item.images.large + '">' +
          '<img src="' + item.images.thumb + '" alt="' + item.title +'"/>' +
        '</a>' +
      '</li>' 

      //console.log(itemHTML);
      //jquery 태그형식으로 push하고 태그속성을 불러옴 (text 형식으로 리스트에 추가되는 것이 아니라 li태그 속성을 가진채로 배열로 들어감)
      elements.push($(itemHTML).get(0));  
      console.log(elements);  
     
    })//each

    //container 안에 배열형태의 elements를 한번에 로딩시켜줌
    $container.append(elements);  

    //이미지가 로딩이 된 것이 확인되면 
    //imagesLoaded 라이브러리를 이용하여 할일에 is-loading을 빼서 이미지를 정렬시켜줌
    $container.imagesLoaded(function(){
      //$container.find('li').removeClass('is-loading');
      $(elements).removeClass('is-loading');
      
      //masonry라이브러리가 5번줄에 이미 실행되어 있는 상태에서 로드되어야 작동함 
      //appended, elements는 masonry 자체 문법임 변수로 사용한 elements 아님
      $container.masonry('appended', elements);

    });

    
  })//getJSON

  
  
});
