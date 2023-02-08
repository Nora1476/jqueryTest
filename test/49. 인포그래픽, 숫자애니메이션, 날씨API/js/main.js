$(function () {

  //현재 날씨 API
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?id=1838524&appid=4abbd7d25cb4692ea3baa0445423c648&units=metric", function (data) {
    var cTemp = data.main.temp,
      cLowTemp = data.main.temp_min,
      cHighTemp = data.main.temp_max,
      chumidity = data.main.humidity,
      cIcon = data.weather[0].icon,

      iconUrl = 'http://openweathermap.org/img/w/';

    $("#sunshine .percent-number").text(cTemp);
    $(".clowtemp").append(cLowTemp);
    $(".chightemp").append(cHighTemp);
    $("#water .percent-number").text(chumidity);
    $("#sunshine .icon").attr('src', iconUrl + cIcon + '.png');

  });

  setTimeout(activateScene, 400);

  // Scene 2를 표시
  function activateScene() {

    var $content = $('#scene-2-content'),
      $charts = $content.find('.chart');

    // 컨텐츠가 오른쪽에서 나오는
    $content.stop(true).animate({
      right: 0
    }, 1200, 'easeInOutQuint');

    // 원형 차트 당 처리
    $charts.each(function () {
      var $this = $(this),
        $circleLeft = $this.find('.left .circle-mask-inner'),
        $circleRight = $this.find('.right .circle-mask-inner'),
        $percentContainer = $this.find('.percent-number'),
        $percentNumber = $percentContainer.text();

      $circleLeft.add($circleRight).css({ transform: 'rotate(0)' });

      $percentContainer.text(0);

      console.log($percentNumber);

      $({num:0}).animate({num:$percentNumber},{
        duration:1500,
        progress:function(){
          var now = Math.floor(this.num),
              deg = now * 360 / 100,        //ex) deg 216
              degRight =Math.min(deg, 180),    //ex) deg 180     최소값 선탠
              degLeft =Math.max(deg-180, 0);         //ex) deg 36   최대값 선택
          
          $percentContainer.text(now);
          $circleLeft.css({transform:'rotate('+ degLeft +'deg)'});
          $circleRight.css({transform:'rotate('+ degRight +'deg)'});
        }
      });

    })//$charts.each



  }//activateScene



});
