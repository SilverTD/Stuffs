var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ["V01", "V02", "V03", "V04", "V05", "V06", "V07", "V08", "V09", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17", "V18", "V19", "V20", "V21", "V22", "V23", "V24", "V25", "V26", "V27", "V28", "V29", "V30", "V31", "V32", "V33", "V34", "V35", "V36", "V37", "V38", "V39", "V40", "V41", "V42", "V43", "V44", "V45", "V46", "V47", "V48", "V49", "V50", "V51", "V52", "V53", "V54", "V55"],
    datasets: [{
      label: 'Tổng số ca làm việc của công nhân',
      data: [20,20,21,19,21,21,19,20,20,21,21,20,20,21,19,20,21,20,21,20,20,21,21,20,20,21,20,20,20,20,21,20,20,21,20,20,20,21,20,20,21,20,21,19,20,20,21,20,21,21,21,19,20,20,21],
      lineTension: 0,
      backgroundColor: "rgba(9, 162, 255,0.6)"
    }]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                min: 15,
                max: 24
            }
        }]
    }
}
});

var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["V01", "V02", "V03", "V04", "V05", "V06", "V07", "V08", "V09", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17", "V18", "V19", "V20", "V21", "V22", "V23", "V24", "V25", "V26", "V27", "V28", "V29", "V30", "V31", "V32", "V33", "V34", "V35", "V36", "V37", "V38", "V39", "V40", "V41", "V42", "V43", "V44", "V45", "V46", "V47", "V48", "V49", "V50", "V51", "V52", "V53", "V54", "V55"],
    datasets: [{
      label: 'Tổng số ca đêm làm việc của công nhân',
      data: [5,5,6,8,6,4,6,5,4,5,9,5,6,3,10,5,6,7,6,7,7,10,7,5,6,6,7,5,5,9,6,4,7,5,7,7,7,6,7,7,9,6,11,6,7,5,9,9,8,5,6,8,7,7,6],
      lineTension: 0,
      backgroundColor: "rgba(237, 59, 59,0.6)"
    }]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                max: 14,
            }
        }]
    }
}
});
