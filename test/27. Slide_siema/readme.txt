Siema Slide 라이브러리 사용

1. https://github.com/pawelgrzybek/siema
    - js파일 로드 후 사용법 확인

2. div class="siema" 안에  이미지 넣고
    js 파일에서 new Siema(); 코드로 기본 슬라이드로 실행

    new Siema({
    selector: '.siema',    //기본 선택자 이름 변경했을때 반영
    duration: 200,         //슬라이드가 넘어가는 속도 조절
    easing: 'ease-out',
    perPage: 1,            // 한 화면서 몇개의 이미지가 노출되게할지 지정
    startIndex: 0,         //첫 이미지 지정
    draggable: true,       //스와이프로 넘기는 기능 끄고켜기
    multipleDrag: true,    
    threshold: 20,         //일정 길이 이상 넘어갔을때 다음 이미지로 이동
    loop: false,           //마지막이미지에서 첫이미지로 이동
    rtl: false,
    onInit: () => {},
    onChange: () => {},
    });