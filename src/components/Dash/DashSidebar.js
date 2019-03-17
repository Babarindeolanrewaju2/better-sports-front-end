import React from "react";

const DashSidebar = props => {
  let user = props.currentUser.attributes;

  if (user) {
    return (
      <div className="dashSidebar">
        <div className="userName">
          <h1>
            {user.first_name} {user.last_name}
          </h1>
        </div>
        <div className="userBalance">
          <h3>Balance: ${user.accounts[0].balance}</h3>
        </div>
        <div className="userLinks">
          <h4>Friends</h4>
          <h4>Teams</h4>
          <h4>My Bets</h4>
        </div>
      </div>
    );
  } else {
    return <h1> Loading... </h1>;
  }
};

export default DashSidebar;
