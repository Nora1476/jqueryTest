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
        data: [10, 8, 6, 5, 10, 7, 12, 7, 6, 10, 5, 12],
        backgroundColor: 'rgba(255,0,0,0.5)',
        borderColor: 'rgba(200,0,0)',
        borderWidth: 1,
        lineTension:0.5,
        fill:false,
      },
      {
        label: '2021',
        data: [8, 5, 5, 5, 8, 3, 10, 3, 4, 9, 5, 8],
        backgroundColor: 'rgba(255,0,0,0.5)',
        borderColor: 'rgba(200,0,0)',
        borderWidth: 1,
        lineTension:0.5,
        fill:false
      },
    ]
  },
  options:{
    maintainAspectRatio: false,
    scales:{
      yAxis:{
        stacked:true  //차트 누적데이터를 출력
      }
    }
  }

});

