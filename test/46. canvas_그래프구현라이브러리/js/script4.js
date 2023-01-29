var mychart = $('#doughnut-chart');
var myLineChart = new Chart(mychart, {
  type : 'doughnut',
  data : {
    labels: [
      '1분기', '2분기', '3분기', '4분기' 
    ],
    datasets: [
      {
        label: '2022',
        data: [10, 8, 6, 5],
        backgroundColor: [
          "rgba(242,166,54,.5)",
          "rgba(39,79,76,.5)",
          "rgba(40,161,130,.5)",
          "rgba(206,29,22,.5)",
        ],
        borderColor: [
          "rgb(242,166,54)",
          "rgb(39,79,76)",
          "rgb(40,161,130)",
          "rgb(206,29,22)",
        ],
        borderWidth: 1,
        lineTension:0.5,
        fill:false,
      },
    ]
  },
  options:{
    maintainAspectRatio: false,
  }

});

