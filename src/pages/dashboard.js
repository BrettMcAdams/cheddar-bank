import React from "react";
import "../styles/dashboard.css";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import PolarChart from "../components/charts/PolarChart";
import BarChart from "../components/charts/BarChart";
import portrait from "../images/portrait.png";
import { Card } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PieChartIcon from "@material-ui/icons/PieChart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";


const dashboard = () => {
  return (
    <div className="dash">
      <div className="dash__left">
        <div className="dash__logoContainer">
          <img
            className="dash__logo"
            src="https://cdn.iconscout.com/icon/free/png-256/cheese-1806482-1534540.png"
            alt=""
          />
          <Link to='/' ><h2>Cheddar</h2></Link>
        </div>
        <nav className="dash__nav">
          <Link to="/dashboard">
            <DashboardIcon />
            Dashboard
          </Link>
          <Link to="/portfolio">
            <PieChartIcon />
            Portfolio
          </Link>
          <Link to="/account">
            <AccountBoxIcon />
            Account
          </Link>
          <Link to="/settings">
            <SettingsIcon />
            Settings
          </Link>
        </nav>
        <div className="dash__info">
          <h2>
            <ContactMailIcon style={{ marginRight: 7 }} />
            Contact Info
          </h2>
          <h3>Name:</h3>
          <p>Brett McAdams</p>
          <h3>Email:</h3>
          <p>BrettMcAdams96@gmail.com</p>
          <h3>Phone:</h3>
          <p>(407) 580-6488</p>
          <h2>
            <AccountBalanceIcon style={{ marginRight: 7 }} />
            Bank Info
          </h2>
          <h3>Bank:</h3>
          <p>Navy Federal Credit Union</p>
          <h3>Account Number:</h3>
          <p>47498509192383</p>
        </div>
      </div>
      <div className="dash__right">
        <div className="dash__rightTop">
          <div className="dash__search">
            <SearchIcon fontSize="large" className="dash__searchIcon" />
            <input
              placeholder="Type here to search.."
              className="dash__searchInput"
              type="text"
            />
          </div>
          <div className="dash__rightSide">
            <NotificationsIcon
              style={{
                height: "100%",
                padding: "1px",
                marginRight: 10,
              }}
            />
            <img className="dash__topImage" src={portrait} alt="" />
            <h3>
              Hi, Brett <ArrowDropDownIcon />
            </h3>
          </div>
        </div>
        <div class="grid-container__left">
          <Card style={{ margin: 10, display: "grid", placeItems: "center" }}>
            <LineChart />
          </Card>
          <Card style={{ margin: 10, display: "grid", placeItems: "center" }}>
            <PieChart />
          </Card>
        </div>
        <div class="grid-container__right">
          <Card style={{ margin: 10, display: "grid", placeItems: "center" }}>
            <PolarChart />
          </Card>
          <Card style={{ margin: 10, display: "grid", placeItems: "center" }}>
            <BarChart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
