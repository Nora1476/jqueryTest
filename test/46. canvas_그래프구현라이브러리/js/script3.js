var mychart = $('#bar-chart');

var data2022 = {
  label: '2022',
  data: [10, 8, 6, 5, 10, 7, 12, 7, 6, 10, 5, 8],
  backgroundColor: [
    "rgba(242,166,54,.5)",
    "rgba(39,79,76,.5)",
    "rgba(40,161,130,.5)",
    "rgba(206,29,22,.5)",
    "rgba(242,166,54,.5)",
    "rgba(39,79,76,.5)",
    "rgba(40,161,130,.5)",
    "rgba(206,29,22,.5)",
    "rgba(242,166,54,.5)",
    "rgba(39,79,76,.5)",
    "rgba(40,161,130,.5)",
    "rgba(206,29,22,.5)"
  ],
  borderColor: [
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)",
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)",
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)"
  ],
  hoverBackgroundColor:[
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)",
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)",
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)"
  ],
  borderWidth: 1,
  lineTension:0.5,
  fill:true
}

var data2021 = {
  label: '2021',
  data: [8, 6, 4, 3, 8, 5, 10, 5, 5, 8, 4, 6],
  backgroundColor: [
    "rgba(242,166,54,.5)",
    "rgba(39,79,76,.5)",
    "rgba(40,161,130,.5)",
    "rgba(206,29,22,.5)",
    "rgba(242,166,54,.5)",
    "rgba(39,79,76,.5)",
    "rgba(40,161,130,.5)",
    "rgba(206,29,22,.5)",
    "rgba(242,166,54,.5)",
    "rgba(39,79,76,.5)",
    "rgba(40,161,130,.5)",
    "rgba(206,29,22,.5)"
  ],
  borderColor: [
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)",
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)",
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)"
  ],
  hoverBackgroundColor:[
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)",
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)",
    "rgb(242,166,54)",
    "rgb(39,79,76)",
    "rgb(40,161,130)",
    "rgb(206,29,22)"
  ],
  borderWidth: 1,
  lineTension:0.5,
  fill:true
}




var myLineChart = new Chart(mychart, {
  type : 'bar',
  data : {
    labels: [
      '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' 
    ],
    datasets: [
      data2021,
      data2022
    ]
  },
  options:{
    maintainAspectRatio: false,
    //indexAxis: 'y',     //bar 방향 변경
    legend:{     //년도 라벨 스타일 변경
      display:false,
    },
    scales:{
      yAxis:{stacked:true},  //차트 누적데이터를 출력
      xAxis:{stacked:true}  //차트 누적데이터를 출력     
    }
  }

});