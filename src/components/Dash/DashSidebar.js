import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const DashSidebar = props => {
  if (props.user.attributes) {
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
          <Link className="sidbarLink" to="/teams/soccer">
            All teams
          </Link>

          <Link className="sidbarLink" to="/addFunds">
            Add funds
          </Link>

          <Link className="sidbarLink" to="/bets">
            My bets
          </Link>
        </div>
      </div>
    );
  } else {
    return <h1> Loading... </h1>;
  }
};

function mapStateToProps(state) {
  return {
    user: state.currentUser
  };
}

export default connect(mapStateToProps)(DashSidebar);

// export default DashSidebar;
