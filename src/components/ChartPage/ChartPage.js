import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import PolarChart from "../charts/PolarChart";
import BarChart from '../charts/BarChart'
import "./ChartPage.css";


const useStyles = makeStyles({
  root: {
    margin: 10,
    display: "grid",
    placeItems: "center",
  },
});

const ChartPage = () => {
  const classes = useStyles();
  return (
    <div className='chart' >
      <div className="grid-container__left">
        <Card className={classes.root}>
          <LineChart />
        </Card>
        <Card className={classes.root}>
          <PieChart />
        </Card>
      </div>
      <div className="grid-container__right">
        <Card className={classes.root}>
          <PolarChart />
        </Card>
        <Card className={classes.root}>
          <BarChart />
        </Card>
      </div>
    </div>
  );
};

export default ChartPage;
