import React from "react";

import { connect } from "react-redux";

import "../styles/Navbar.css";

const Navbar = props => {
  const logMeOut = () => {
    localStorage.removeItem("token");
  };

  if (localStorage.getItem("token")) {
    return (
      <div className="nav">
        <img
          className="navLogo"
          src="http://localhost:3000/images/betterSportsLogo.png"
          alt="Better Sports Logo"
        />
        <div className="navLink">
          <a href="/" onClick={logMeOut}>
            Logout
          </a>
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
        <div className="navLink">
          <a href="/signup">Sign up</a>
        </div>
        <div className="navLink">
          <a href="/login">Login</a>
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
