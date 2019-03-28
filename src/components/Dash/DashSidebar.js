import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// react router links used on the left sidebar of the dashboard
import { Link } from "react-router-dom";

const DashSidebar = props => {
  // if the user has been set, and has attributes then return the following HTML
  if (props.user.attributes) {
    // get user from props
    let user = props.user.attributes;
    return (
      <div className="dashSidebar">
        <div className="userName">
          {/* Display user full name  */}
          <h1>
            {user.first_name} {user.last_name}
          </h1>
        </div>
        {/* Display the balance of the user */}
        <div className="userBalance">
          <h3>
            Balance: $
            {user !== undefined ? user.accounts[0].balance : "Loading..."}
          </h3>
        </div>

        {/* Give user quick access from their dashboard
          to other compoents of the application */}
        <div className="userLinks">
          <Link className="sidebarLink" to="/teams/soccer">
            All teams
          </Link>

          <Link className="sidebarLink" to="/addFunds">
            Add funds
          </Link>

          <Link className="sidebarLink" to="/bets">
            My bets
          </Link>
        </div>
      </div>
    );
  } else {
    return <h1> Loading... </h1>;
  }
};

// make user accessible to component from Redux state
function mapStateToProps(state) {
  return {
    user: state.currentUser
  };
}

export default connect(mapStateToProps)(DashSidebar);
