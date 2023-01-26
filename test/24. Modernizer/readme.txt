modernizr

- html, css, js가 사용자의 브라우저에서 특정기능을  지원하는지 아닌지를 알려줌

- yarn을 통해 다운받을 경우 모든 기능이 다운로드 되기 때문에 원하는 기능만 cdn으로 가져다 쓰는것을 권장
  yarn init
  yarn add modernizr

- 패키지파일 다운로드
  css reflection (현재 chrome에서만 지원 caniuse.com을 통해 지원여부 확인가능)
  https://modernizr.com/download 접속하여 원하는 기능선택 
    -> 패키지 builde 후 다운로드  ->  해당패키지 로드시키기

-cdn 사용
  google에서 modernizr cdn검색 후 코드 확인
  https://cdnjs.com/libraries/modernizr/2010.07.06dev