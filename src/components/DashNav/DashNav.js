import React from "react";
import "./DashNav.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import portrait from "../../images/portrait.png";

const DashNav = () => {
  return (
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
  );
};

export default DashNav;
