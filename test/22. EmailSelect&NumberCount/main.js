$(function(){

  var $selectEmail = $('.select_domain'),
      $targetInput = $('.email_domain'),
      $count = $('.count'),

      /* uniprice 기본값 불러오는 
      첫번째 방법 :  데이터 속성을 추가하는 방법 */
      $uniPrice =  parseInt($('.unitprice').attr('data-uniprice')),  
      
      /* 두번째 방법 : text를 불러와서 , 콤마를 빼고 정수로바꾸는 방법
      $unit = $('.unitprice').text(),
      $uniPrice = parseInt($unit.replace(',','')),  // , 콤마를 뺴고 정수로 바꿈
      */

      $currentNumber = parseInt($count.text()),
      $total = $('.total');

      
      $('span a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('plus')){
          $currentNumber += 1;
          //console.log($currentNumber);
        }else{
          if($currentNumber>0){
            $currentNumber -= 1;
            console.log($currentNumber);
          }
        }
        $count.text($currentNumber);
        var semiTotal = $uniPrice * $currentNumber;
        /* 숫자 천단위 콤마 찍는 
        첫번쨰 방법 자바스크립트 Number.toLocaleString('en') 사용 
        var total = Number(semiTotal).toLocaleString('en');  
        */

        /* 두번쨰 방법 
        jquery 라이브러리 사용 html파일에서 js 파일 로드시키면 사용가능 */
        $total.text(semiTotal);  //text()  값이 있으면값을 가져오는 역할, 없으면 값을 넣어주는 역할
        $('.number').number(true);

      });

      $('.number').number(true);  //윈도우가 로드되었을때도 기본적으로 동작하도록 

      $selectEmail.change(function(){  //select의 값이 바뀌면 할일 
        var domain = $(this).val();
        $targetInput.val(domain);
      });

}) //documrnt ready jquery 