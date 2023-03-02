// Chart JS Start-------------------------------------->

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: '# Last year',
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        borderWidth: 1,
        backgroundColor:"#3F80EA",
        barThickness: 12,
    },{
        label: '# This year',
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        borderWidth: 1,
        borderRadius: 8,
        barThickness: 12,
        backgroundColor:"#84aef2",
    }]
    },
    responsive:true,
    options: {
      plugins: {
        legend: {
          display: false,
        }
      },
      scales: {
        y: {
            stacked:true,
            beginAtZero: true,
            drawBorder: false,
            drowOnChartArea: false,
            grid:{
              lineWidth: 0,
              drawTicks: false,
              borderWidth: 0,
              display: true,
            }
        }, x:{
            stacked:true,
            grid:{
              lineWidth: 0,
            }
        }
      }
    }
  });

// Chart JS End-------------------------------------->

// Doughnut JS Start-------------------------------------->

const abc = document.getElementById('myDoughnut');

new Chart(abc, {
  type: 'doughnut',
  data: {
      labels: ['Social' ,'Search','Direct','Others'],
      datasets: [{
        data: [260,125,54,146],
        backgroundColor:['rgb(63,128,234)','rgb(240,173,78)','rgb(217,83,79)','rgb(232,234,237)'],
        weight: 1,
        radius:'40%',
        cutout:'75%',
        offset: 10,
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        display: false,
      }
    }
  }
});

// Doughnut JS End-------------------------------------->

