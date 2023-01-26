  //적용시 파일명을 main.js으로 설정
  
  //$(document).ready(function(){
  //  $('h1').css({'color:red'});
  //});


  //위 function ready 축약형
  $(function(){
    /*
    $('h1').css({'color':'red'}); 
    $('#typo .inner').css({
       'textDecoration':'underline',
       'borderBottom':'5px solid red',
       'transform': 'rotate(20deg)',
       'opacity':'0.5'     
    }); 
    */


    //실행시점 제어 - event종류  - mouseover 마우스가 올려졌을때
    //on 매서드

    //마우스가 들어오고 나갈때의 이벤트
    //$('#typo').on('이벤트 종류', 할일);
    /*
    $('#typo').on('mouseover', function(){
        $(this).css({'backgroundColor':'green'});
    }).on('mouseout', function(){
        $(this).css({'backgroundColor':'#3498db'});
    }); // #typo mouseover
    */

    // 위 on매서드 체이닝 축약버전
    $('#typo, h1')
    .mouseover(function(){
        $(this).css({'backgroundColor':'green'});
    })
    .mouseout(function(){
        $(this).css({'backgroundColor':'#3498db'});
    }); // #typo mouseover
    
    

  });
