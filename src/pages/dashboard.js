import React from "react";
import "../styles/dashboard.css";
import DashSidebar from "../components/DashSidebar/DashSidebar";
import DashNav from "../components/DashNav/DashNav";
import ChartPage from "../components/ChartPage/ChartPage";
import { Route, Switch } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="dash">
      <DashSidebar />
      <section className="dash__right">
        <DashNav />
        <Switch>
          <Route path='/' >
            <ChartPage />
          </Route>
        </Switch>
      </section>
    </section>
  );
};

export default Dashboard;
