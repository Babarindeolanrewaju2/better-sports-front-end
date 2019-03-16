import React from "react";

const DashSidebar = props => {
  //return curent user info for the sidebar of the dashboard
  return (
    <div className="dashSidebar">
      <div className="userName">
        <h1>User full name</h1>
      </div>
      <div className="userBalance">
        <h3>Balance: $MONIES HERE</h3>
      </div>
      <div className="userLinks">
        <h4>Friends</h4>
        <h4>Teams</h4>
        <h4>My Bets</h4>
      </div>
    </div>
  );
};

export default DashSidebar;
