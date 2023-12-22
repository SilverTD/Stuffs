var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ["V01", "V02", "V03", "V04", "V05", "V06", "V07", "V08", "V09", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17", "V18", "V19", "V20", "V21", "V22", "V23", "V24", "V25", "V26", "V27", "V28", "V29", "V30", "V31", "V32", "V33", "V34", "V35", "V36", "V37", "V38", "V39", "V40", "V41", "V42", "V43", "V44", "V45", "V46", "V47", "V48", "V49", "V50", "V51", "V52", "V53", "V54", "V55"],
    datasets: [{
      label: 'Tổng số ca làm việc của công nhân',
      data: [18,21,24,21,20,18,18,17,24,24,20,18,18,20,23,17,20,23,20,18,23,24,20,22,17,20,18,23,17,18,24,17,17,24,17,18,22,20,23,23,20,18,20,21,18,21,19,23,20,19,20,23,18,23,24],
      lineTension: 0,
      backgroundColor: "rgba(9, 162, 255, 0.6)"
    }]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                min: 10,
                max: 30
            }
        }]
    }
}
});

var ctx1 = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ["V01", "V02", "V03", "V04", "V05", "V06", "V07", "V08", "V09", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17", "V18", "V19", "V20", "V21", "V22", "V23", "V24", "V25", "V26", "V27", "V28", "V29", "V30", "V31", "V32", "V33", "V34", "V35", "V36", "V37", "V38", "V39", "V40", "V41", "V42", "V43", "V44", "V45", "V46", "V47", "V48", "V49", "V50", "V51", "V52", "V53", "V54", "V55"],
    datasets: [{
      label: 'Tổng số ca đêm làm việc của công nhân',
      data: [7,8,6,9,6,9,6,10,2,4,4,7,9,11,8,9,8,0,10,9,5,9,5,3,6,6,12,2,6,3,2,10,10,5,6,4,4,7,2,6,4,9,5,9,5,7,9,6,10,10,10,3,9,5,1],
      lineTension: 0,
      backgroundColor: "rgba(237, 59, 59, 0.6)"
    }]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                max: 20
            }
        }]
    }
}
});
