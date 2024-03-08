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
    borderColor: 'rgb(195, 181, 255)', // color of line
    backgroundColor: 'rgba(205 , 198, 255, .6)', //bg color
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


// Daily Line Chart
const dailyEl = document.getElementById('daily-chart');

const dailyChart = new Chart(dailyEl, {
// type of chart
type: 'line',
// The data for our dataset
data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
    label: '',
    data: [
        1200, 1500, 800, 500, 1000, 1900, 1000, 1500, 1000, 800, 2100
    ],
    borderWidth: 1, //width of line
    borderColor: 'rgb(195, 181, 255)', // color of line
    backgroundColor: 'rgba(205 , 198, 255, .6)', //bg color
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


// Daily Line Chart
const weeklyEl = document.getElementById('weekly-chart');

const weeklyChart = new Chart(weeklyEl, {
// type of chart
type: 'line',
// The data for our dataset
data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
    label: '',
    data: [
        1500, 2500, 2000, 1000, 750, 875, 2500, 950, 1225, 750, 1250
    ],
    borderWidth: 1, //width of line
    borderColor: 'rgb(195, 181, 255)', // color of line
    backgroundColor: 'rgba(205 , 198, 255, .6)', //bg color
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


// Daily Line Chart
const monthlyEl = document.getElementById('monthly-chart');

const monthlyChart = new Chart(monthlyEl, {
// type of chart
type: 'line',
// The data for our dataset
data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
    label: '',
    data: [
        2000, 1500, 1250, 1500, 2000, 1500, 1250, 750, 2100, 1500, 2500
    ],
    borderWidth: 1, //width of line
    borderColor: 'rgb(195, 181, 255)', // color of line
    backgroundColor: 'rgba(205 , 198, 255, .6)', //bg color
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



const trafficButtons = document.getElementsByClassName('line-btn');
for (btn of trafficButtons) {
    btn.addEventListener('click', e => {
        const target = e.target;

        const hourlyButton = document.querySelector('#hourly-btn');
        const dailyButton = document.querySelector('#daily-btn');
        const weeklyButton = document.querySelector('#weekly-btn');
        const monthlyButton = document.querySelector('#monthly-btn');

        const hourly = document.querySelector('#hourly-wrapper');
        const daily = document.querySelector('#daily-wrapper');
        const weekly = document.querySelector('#weekly-wrapper');
        const monthly = document.querySelector('#monthly-wrapper');
        if (target.innerText === 'Hourly') {
            hourly.style.display = 'block';
            daily.style.display = 'none';
            weekly.style.display = 'none';
            monthly.style.display = 'none';

            hourlyButton.style.backgroundColor = '#50C878';
            dailyButton.style.backgroundColor = 'transparent';
            weeklyButton.style.backgroundColor = 'transparent';
            monthlyButton.style.backgroundColor = 'transparent';

            hourlyButton.style.color = '#F9F6EE';
            dailyButton.style.color = 'black';
            weeklyButton.style.color = 'black';
            monthlyButton.style.color = 'black';

        } else if (target.innerText === 'Daily') {
            hourly.style.display = 'none';
            daily.style.display = "block";
            weekly.style.display = 'none';
            monthly.style.display = 'none';

            hourlyButton.style.backgroundColor = 'transparent';
            dailyButton.style.backgroundColor = '#50C878';
            weeklyButton.style.backgroundColor = 'transparent';
            monthlyButton.style.backgroundColor = 'transparent';
            
            hourlyButton.style.color = 'black';
            dailyButton.style.color = '#F9F6EE';
            weeklyButton.style.color = 'black';
            monthlyButton.style.color = 'black';

        } else if (target.innerText === 'Weekly') {
            hourly.style.display = 'none';
            daily.style.display = "none";
            weekly.style.display = 'block';
            monthly.style.display = 'none';

            hourlyButton.style.backgroundColor = 'transparent';
            dailyButton.style.backgroundColor = 'transparent';
            weeklyButton.style.backgroundColor = '#50C878';
            monthlyButton.style.backgroundColor = 'transparent';
            
            hourlyButton.style.color = 'black';
            dailyButton.style.color = 'black';
            weeklyButton.style.color = '#F9F6EE';
            monthlyButton.style.color = 'black';

        } else if (target.innerText === 'Monthly') {
            hourly.style.display = 'none';
            daily.style.display = "none";
            weekly.style.display = 'none';
            monthly.style.display = 'block';

            hourlyButton.style.backgroundColor = 'transparent';
            dailyButton.style.backgroundColor = 'transparent';
            weeklyButton.style.backgroundColor = 'transparent';
            monthlyButton.style.backgroundColor = '#50C878';
            
            hourlyButton.style.color = 'black';
            dailyButton.style.color = 'black';
            weeklyButton.style.color = 'black';
            monthlyButton.style.color = '#F9F6EE';

        }
    })
}


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

    backgroundColor: 'rgba(0, 0, 155, .5)'
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

    backgroundColor: ['rgba(0, 0, 155, .5)', 'rgba(0, 155, 0, .5)', 'rgba(8, 143, 143, .5)']
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






