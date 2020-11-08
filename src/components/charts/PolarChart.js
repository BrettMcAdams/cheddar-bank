import React from 'react'
import { PolarArea } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 8, 10, 12],
      backgroundColor: [
        '#ffd29d',
        '#f6a145',
        '#00c6e5',
        '#0080cc',
        '	#002b55',
      ],
      borderWidth: 1,
    },
  ],
}

const Polar = () => (
  <>
    <h2>Other Chart</h2>
    <PolarArea height={230} data={data} />
  </>
)

export default Polar