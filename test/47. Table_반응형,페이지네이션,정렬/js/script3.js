$(function(){
  /*
    변수 생성
    - rowsPerPage 페이지당 보여줄 개수 15
    - rows 가로행의 tr
    - rowsCount 가로행의 tr 개수
    - pageCount 페이지네이션 개수 = 100/5
    - numbers
    콘솔에서 pageCount
  */

  var rowsPerPage = 15,
      rows = $('#my-table tbody tr'),
      rowsCount = rows.length,
      pageCount = Math.ceil(rowsCount/rowsPerPage),
      numbers = $('#numbers');
  console.log(pageCount);

  /* 페이지네이션  li를 생성 반복문 */
  for (let i = 1; i < pageCount+1; i++) {
    numbers.append('<li><a href="">' + i + '</a></li>');
  }

  //열자마자 첫번쨰 li에
  numbers.find('li:first-child a').addClass('active');

  /* 
  함수(숫자)
  A.slice(시작값, 끝값)    0번째부터 시작하며 끝값의 숫자는 포함하지 않음
  
  페이지네이션 함수 displayRows
  함수(1)  A.slice(0,20)
  함수(2)  A.slice(0,40) 되는 구조
  */
  function displayRows(idx){
    var start = (idx - 1) * rowsPerPage,
        end = start + rowsPerPage;
        rows.hide();
        rows.slice(start,end).show();
  }
  displayRows(1);

  //페이지네이션 클릭시 보여주기
  /*
    클릭한 a tag에 active추가,
    그 요소의 숫자를 displayRows의 매개변수 지정.
  */
 numbers.find('li').click(function(e){
  e.preventDefault();  //a링크 기본기능 막음

  numbers.find('li a').removeClass('active');
  $(this).find('a').addClass('active');

  // 첫번쨰 방법 : 현재 클릭한 li의 인덱스 번호를 변수에 저장
  //var index = $(this).index()+1; 

  // 두번쨰 방법 : li안에 a태그에 있는 숫자를 인덱스로 가져옴
  var index = $(this).text();
  console.log(index);


  displayRows(index);
 })


  


});//ready