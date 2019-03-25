import React from "react";

import { connect } from "react-redux";

const DashSidebar = props => {
  if (props.user === "placeholder") {
    return <h1> Loading... </h1>;
  } else {
    let user = props.user.attributes;
    return (
      <div className="dashSidebar">
        <div className="userName">
          <h1>
            {user.first_name} {user.last_name}
          </h1>
        </div>
        <div className="userBalance">
          <h3>
            Balance: $
            {user !== undefined ? user.accounts[0].balance : "Loading..."}
          </h3>
        </div>
        <div className="userLinks">
          <a href="/addFunds">
            <h4>Add money to account</h4>
          </a>
          <h4>Friends</h4>
          <h4>Teams</h4>
          <h4>My Bets</h4>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(DashSidebar);

//
