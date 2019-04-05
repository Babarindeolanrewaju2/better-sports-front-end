import React, { Fragment } from "react";

import { connect } from "react-redux";

// component found in components folder
import Navbar from "../components/Navbar";

// components found in components/Dash folder
import DashSidebar from "../components/Dash/DashSidebar";
import DashGames from "../components/Dash/DashGames";
import DashBets from "../components/Dash/DashBets";

// styling
import "../styles/Dashboard.css";

const Dashboard = props => {
  return (
    <Fragment>
      <Navbar />
      <div className="dashboardContainer">
        <div className="dashboardLeft">
          <DashSidebar />
        </div>
        <div className="dashboardContainerRight">
          <div className="dashboardRightTop">
            {/*Games are passed as a prop so that games can be limited in the compoent */}
            <DashGames games={props.games} {...props} />
          </div>
          <div className="dashboardRightBottom">
            {props.user ? <DashBets user={props.user} {...props} /> : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// connect to Redux state
const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};

export default connect(mapStateToProps)(Dashboard);
