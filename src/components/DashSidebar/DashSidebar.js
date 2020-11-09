import React from "react";
import './DashSidebar.css'
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PieChartIcon from "@material-ui/icons/PieChart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";

const DashSidebar = () => {
  return (
    <div className="dash__left">
      <div className="dash__logoContainer">
        <img
          className="dash__logo"
          src="https://cdn.iconscout.com/icon/free/png-256/cheese-1806482-1534540.png"
          alt=""
        />
        <Link to="/">
          <h2>Cheddar</h2>
        </Link>
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
  );
};

export default DashSidebar;
