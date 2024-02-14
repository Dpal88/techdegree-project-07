// Hourly Line Chart
const ctx = document.getElementById('line-chart');

const chart = new Chart(ctx, {
// type of chart
type: 'line',
// The data for our dataset
data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
    label: '',
    data: [
        750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500
    ],
    borderWidth: 1, //width of line
    borderColor: 'rgb(155, 0, 0)', // color of line
    backgroundColor: 'rgba(255, 0, 0, 0.5)', //bg color
    pointRadius: 3, //radius of points on line
    fill: true, // set background color
    tension: .4, // makes line wavy
    
    }]
},
options: {
    aspectRatio: 1.8,
    plugins: {
        legend: {
            display: false
        },
        
    },
    // scale / axis is singular for scales / axes
    scales: {
    y: {
        ticks: {
            color: 'black',
            font: {
                size: 13
            }
        },
        beginAtZero: true
    },
    x: {
        ticks: {
            font: {
                // weight: 'bold',
                size: 13
            }
        }
    }
    }
}
});


// const backgroundColor = chart.data.datasets[0].backgroundColor;
// console.log(backgroundColor);


//bar chart
const barChartTag = document.getElementById('bar-chart');

const barChart = new Chart(barChartTag, {
// type of chart
type: 'bar',
// The data for our dataset
data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
    label: '',
    data: [
        75, 125, 175, 125, 225, 200, 100
    ],
    borderWidth: 1, //width of line

    backgroundColor: 'rgba(155, 0, 0, .5)'
    }]
},
options: {
    aspectRatio: 1.8,
    plugins: {
        legend: {
            display: false
        },
        
    },
    // scale / axis is singular for scales / axes
    scales: {
    y: {
        ticks: {
            font: {
                size: 13
            }
        },
        beginAtZero: true
    },
    x: {
        ticks: {
            font: {
                // weight: 'bold',
                size: 13
            }
        }
    }
    }
}
});


//pie chart
const doughnutChartTag = document.getElementById('doughnut-chart');

const doughnutChart = new Chart(doughnutChartTag, {
// type of chart
type: 'doughnut',
// The data for our dataset
data: {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
    label: '',
    data: [
        300, 75, 60
    ],
    borderWidth: 1, //width of line

    backgroundColor: ['rgba(155, 0, 0, .5)', 'rgba(0, 155, 0, .5)', 'rgba(0, 0, 155, .5)']
    }]
},
options: {
    aspectRatio: 2.2,
    plugins: {
        legend: {
            display: true,
            position: 'right',
            labels: {
                boxWidth: 25,
                boxHeight: 14,
                font: {
                    size: 14,
                    weight: 'bold',
                },
            }
        },
        
    },
}
});






