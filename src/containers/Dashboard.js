import React, { Fragment } from "react";

import Navbar from "../components/Navbar";
import DashSidebar from "../components/Dash/DashSidebar";
import DashGames from "../components/Dash/DashGames";
import DashBets from "../components/Dash/DashBets";

import "../styles/Dashboard.css";

const Dashboard = props => {
  return (
    <Fragment>
      <Navbar currentUser={props.currentUser} />
      <div className="dashboardContainer">
        <div className="dashboardLeft">
          <DashSidebar currentUser={props.currentUser} />
        </div>
        <div className="dashboardRight">
          <DashGames games={props.games} />
          <DashBets />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
