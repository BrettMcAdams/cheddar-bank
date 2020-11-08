import React from "react";
import { Pie } from "@reactchartjs/react-chart.js";

const data = {
  labels: ["Stocks", "Bonds", "Mutual Funds", 'CTF\'s'],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 12, 3, 5],
      backgroundColor: [
        "#f6a145",
        "#00c6e5",
        "#0080cc",
        "#002b55",
      ],
      borderColor: [
        "#f6a145",
        "#00c6e5",
        "#0080cc",
        "#002b55",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <h2>Portfolio Diversity</h2>
    <Pie height={230} data={data} />
  </>
);

export default PieChart;
