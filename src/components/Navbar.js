import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// use react router for navigation links
import { NavLink } from "react-router-dom";

// styling
import "../styles/Navbar.css";

const Navbar = props => {
  // if logout is clicked, remove token from browser
  const logMeOut = () => {
    localStorage.removeItem("token");
  };

  // if the brower has a token in localStorage,
  // display the navbar for a logged in user
  if (localStorage.getItem("token")) {
    return (
      <div className="nav">
        <a href="/dashboard">
          <img
            className="navLogo"
            src="http://localhost:3000/images/betterSportsLogo.png"
            alt="Better Sports Logo"
          />
        </a>
        <div className="links">
          <ul>
            <NavLink className="navLink" to="/dashboard">
              DASHBOARD
            </NavLink>

            <NavLink className="navLink" to="/games">
              ALL GAMES
            </NavLink>

            <NavLink className="navLink" to="/bets">
              YOUR BETS
            </NavLink>

            <NavLink className="navLink" to="/addFunds">
              ADD FUNDS
            </NavLink>

            <NavLink className="navLink" to="/" onClick={logMeOut}>
              LOGOUT
            </NavLink>
          </ul>
        </div>
      </div>
    );
  } else {
    // display the navbar for someone who is not logged in
    return (
      <div className="nav">
        <a href="/">
          <img
            className="navLogo"
            src="http://localhost:3000/images/betterSportsLogo.png"
            alt="Better Sports Logo"
          />
        </a>

        <div className="homeLinks">
          <ul>
            <NavLink className="navLink" to="/login">
              LOGIN
            </NavLink>

            <NavLink className="navLink" to="/signup">
              SIGN UP
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
};

// listen to state to get all games
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Navbar);
