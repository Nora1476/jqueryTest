날씨API(무료)
  - https://openweathermap.org/API

  - 해당사이트 로그인해서 개인 API키 확인
  - 도시코드번호 확인
    (메인페이지에서 도시검색 Url 뒤에 나오는 숫자::  부산:1838524)

  - API Documentation
    parameter로 기본 설정 확인가능 
    https://openweathermap.org/current#parameter
  
  - url뒤에 '&'를 통해 기본설정값 변경가능
    당일 특정시간대 날씨예보_ 부산
    http://api.openweathermap.org/data/2.5/forecast?id=1838524&appid=4abbd7d25cb4692ea3baa0445423c648&units=metric   :units=metric 으로 설정할 경우 온도가 Celsius로 표현
    현재 날씨예보 -부산
    https://api.openweathermap.org/data/2.5/weather?id=1838524&appid=4abbd7d25cb4692ea3baa0445423c648&unit=metric
    

  - jquery으로 json 파일 불러와서 사용
     $.getJSON(데이터, function(data){})

  - weather icon 가져오기
    https://openweathermap.org/weather-conditions


