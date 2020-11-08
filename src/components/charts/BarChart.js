import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['Microsoft', 'Ford', 'Tesla', 'Apple', 'Amazon'],
  datasets: [
    {
      label: 'Company Shares',
      data: [90, 35, 63, 35, 82, 43],
      backgroundColor: [
        '#ffd29d',
        '#f6a145',
        '#00c6e5',
        '#0080cc',
        '#002b55',
      ],
      borderColor: [
        '#ffd29d',
        '#ffd29d',
        '#00c6e5',
        '#0080cc',
        '#002b55',
      ],
      borderWidth: 1,
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

const VerticalBar = () => (
  <>
    <h2>Shares Held</h2>
    <Bar data={data} options={options} />
  </>
)

export default VerticalBar