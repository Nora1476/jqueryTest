$(function () {
  var $container = $('.gallery'),
      $loadMoreBtn = $('.load-more'),
      $addItemCount = 8,
      $added = 0,  //더보기 버튼을 클릭해서 추가된 항목수(리스트 항목을 모두 로드했을때 , 더보기 버튼을 사라지게하기 위함)
      $allData = [];

      $container.masonry({
        // options
        itemSelector: '.gallery-item',
        columnWidth: 270,
        gutter:20
      });  
  
  //$.getJSON('파일경로', 할일);
  /*
    $.getJSON('파일경로', function(data){
      initGallery();
    })
  */
  $.getJSON('./data/content.json', initGallery);
  
  function initGallery(data){   
    
    //매개변수를 하나만 쓰면 data를 몽땅 가져온다는 뜻
    //매개변수를 두개쓰면 첫번쨰 i 인덱스, 두번째 data 내용
    $allData  = data; //전체 데이터를 가져옴
    //console.log(data);

    /* 클릭했을떄 8개씩 로드
    $loadMoreBtn.click(function(){
      $addItem()
    })
    */
    addItem(); // 열자마자 아이템 추가
    $loadMoreBtn.click(addItem);  //버튼 클릭시 아이템 추가

  }//initGallery

  function addItem(){
    
    var elements =[];
    var slidedData;
    //A.slice(0,8)  A배열 0번째부터 번쨰 전까지의 값을 가져옴
    slidedData = $allData.slice($added, $added+$addItemCount);  
    console.log(slidedData);
    /* 
     $('li').each(function(){ });   jquery object
     $.each('배열', function(i, item){ });   json, 배열의 값마다 할 일
    */
   $.each(slidedData, function(i,item){
    var itemHTML =
        '<li class="gallery-item">' +
            '<a href="#">' +
                '<figure>' +
                  '<img src="'+ item.images.thumb + '" alt="' + item.title + '">' +
                  '<figcaption>'+
                    item.title +
                  '</figcaption>'+
                '</figure>'+
            '</a>'+
        '</li>';

    elements.push($(itemHTML).get(0));  //슬라이스로 잘라서 가져온 데이터를 사용하여 변수 itemHTML을 반복문을 통해 elements 배열에 넣음  
    
   });

   console.log(elements);
   $container.append(elements);

   //$added값을 업데이트
   $added += slidedData.length;
   
   if( $added < $allData.length ){
    $loadMoreBtn.show();
   }else{
    $loadMoreBtn.hide();
   }

   $container.imagesLoaded( function() {
     // images have loaded
     $container.masonry( 'appended', elements );
   });
  
  
  
}//addItem

}); //ready function
