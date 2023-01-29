var mychart = $('#line-chart');
var myLineChart = new Chart(mychart, {
  type : 'line',
  data : {
    labels: [
      '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' 
    ],
    datasets: [
      {
        label: '2022',
        data: [10, 8, 6, 5, 10, 7, 12, 7, 6, 10, 5, 8],
        backgroundColor: 'rgba(255,0,0,0.5)',
        borderColor: 'rgba(200,0,0)',
        borderWidth: 1,
        lineTension:0.5,
        fill:true
      },
    ]
  },
  options:{
    maintainAspectRatio: false
  }

});


var mychart2 = $('#line-chart2');
var myLineChart2 = new Chart(mychart2, {
  type : 'line',
  data : {
    labels: [
      '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' 
    ],
    datasets: [
      {
        label: '2022',
        data: [10, 8, 6, 5, 10, 7, 12, 7, 6, 10, 5, 8],
        backgroundColor: 'rgba(255,0,0,0.5)',
        borderColor: 'rgba(200,0,0)',
        borderWidth: 1,
        lineTension:0,
        borderDash:[10,2,2,10],
        fill:false,
      },
      {
        label: '2021',
        data: [18,10, 16, 8, 13, 15, 14, 11, 8, 11, 9, 10]
      },
    ]
  },
  options:{
    maintainAspectRatio: false
  }

});


var mychart3 = $('#line-chart3');
var sun = new Image();  // html 에는 없지만 제이쿼리를 통해 이미지 생성하는 방법
sun.src = "http://i.imgur.com/yDYW1I7.png";

var myLineChart3 = new Chart(mychart3, {
  type : 'line',
  data : {
    labels: [
      '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' 
    ],
    datasets: [
      {
        label: '2022',
        data: [10, 8, 6, 5, 10, 7, 12, 7, null, null, 5, 8],
        backgroundColor: 'rgba(255,0,0,0.5)',
        borderColor: 'rgba(200,0,0)',
        borderWidth: 1,
        lineTension:0.5,                    //라인 곡선 정도
        fill:false,                         // 색 채우기
        pointRadius:5,                      // 점 포인트의 크기
        pointHoverRadius: 8,                // hover    
        pointBorderColor:'green',           
        pointBackgroundColor: 'white',
        pointHoverBorderColor:'white',
        pointHoverBackgroundColor: 'green',
        //pointStyle: 'triangle',            // 포인터모양변경
        //showLine:false,                    // 그래프 선 없애기
        spanGaps:true,                       // 중간에 null값이 있어도 비우지 않고 자연스럽게 이어줌
        stepped: true,                       // 그래프 각진 모양으로 
        
      },
    ]
  },
  options:{
    maintainAspectRatio: false
  }

});
