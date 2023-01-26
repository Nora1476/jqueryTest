sorting 기능이 있는 라이브러리 

1. mixtiup 라이브러리 사용
    - https://www.kunkalabs.com/mixitup/
    - 파일 다운로드 (깃헙 or 전체파일 다운로드가능)
    - mixitup.min.js 스트립트 적용

      https://www.kunkalabs.com/mixitup/docs/get-started/
    - class명으로 그룹구분
      <div class="container">
        <div class="mix category-a" data-order="1"></div>
        <div class="mix category-b" data-order="2"></div>
        <div class="mix category-b category-c" data-order="3"></div>
        <div class="mix category-a category-d" data-order="4"></div>
      </div>

    -버튼 생성
      <button type="button" data-filter="all">All</button>
      <button type="button" data-filter=".category-a">Category A</button>
      <button type="button" data-filter=".category-b">Category B</button>
      <button type="button" data-filter=".category-c">Category C</button>

    -sorting 버튼
      <button type="button" data-sort="order:asc">Ascending</button>
      <button type="button" data-sort="order:descending">Descending</button>
      <button type="button" data-sort="random">Random</button>

2. 효과 설정가능 
