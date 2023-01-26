JSON(제이슨) 더보기 리스트 갤러리 구현하기 



eq(0) , get(0)  차이점

-eq 
  : 해당태그를 통해 속성 변경할떄 사용
  : $('video').eq(0).play();      작동X
  : $('video').eq(0).css({ });    CSS기능 작동O

-get
  : 태그의 원래 기능을 컨트롤 하려고 불러오는 기능
  :  $('video').get(0).play();      작동O
  : $('video').get(0).css({ });    CSS기능 작동X