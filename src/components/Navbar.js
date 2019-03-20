import React from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = props => {
  const logMeOut = () => {
    localStorage.removeItem("token");
  };

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
    return (
      <div className="nav">
        <img
          className="navLogo"
          src="http://localhost:3000/images/betterSportsLogo.png"
          alt="Better Sports Logo"
        />

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
