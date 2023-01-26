$(function () {
      //클릭할 태그 변수명으로 지정
  var tabAnchor = $('.tabs-nav li a'),
      //보이게할 태크 변수명으로 지정
      tabPanel = $('.tabs-panel');

      tabAnchor.click(function(e){
        e.preventDefault();

        tabAnchor.removeClass('active');
        $(this).addClass('active');

        tabPanel.hide();

        var $target = $(this).attr('href');
        //console.log($target);

        $($target).show();

        //'a'의 형제자매가 없기 때문에 여기서는 못씀    li라면 형제자매가 있지만 a는 현재상황에서는 형재자매가 없음
        //그래서 class 추가는 되지만 빼지는 못함
        //$(this).addClass('active').siblings().removeClass('active');
      });
});

