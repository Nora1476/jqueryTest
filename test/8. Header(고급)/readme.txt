
-과정
header 내용 복사
이벤트 발생시 내용 추가(삽입) clone
offset().top 화면상단에서 떨어진 높이 +  jquery height 헤더 내용물의 높이
                                        (https://www.w3schools.com/jquery/css_height.asp)


A.append(B)   A요소에 B를 추가
  - body 안에 B의 내용이 없을 경우 A요소의 내용의 뒤에 B를 추가
  - body 안에 B의 내용이 있을 경우 A요소의 내용을 이동하는 개념

A.appendTo(B)   B요소에 A를 추가
  


A.prepend(B)   _ A요소의 내용의 앞에 
A.prependTo(B)   _ B요소의 내용의 앞에 


선택자.clone()                // 선택자를 포함한 안애 내용물까지 다 복사
선택자.contents().clone(),    //선택자를 제외한 안애 내용물만 복사


throttle 
브라우저가 검사하는 빈도를 임의로 설정하여 브라우저의 부담을 줄여줌