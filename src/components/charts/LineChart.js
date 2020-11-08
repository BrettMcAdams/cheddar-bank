import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.'],
  datasets: [
    {
      label: 'Spending',
      data: [1400, 900, 1000, 800, 1700, 1200],
      fill: true,
      backgroundColor: '#002b55',
      borderColor: '#002b55',
    },
    {
      label: 'Income',
      data: [1400, 1900, 1300, 1500, 2000, 1800],
      fill: true,
      backgroundColor: '#ffa448',
      borderColor: '#ffa448',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const LineChart = () => (
  <>
    <h2>Income vs Spending</h2>
    <Line data={data} options={options} />
  </>
)

export default LineChart