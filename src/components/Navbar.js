import React from "react";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <img
        className="navLogo"
        src="http://localhost:3000/images/betterSportsLogo.png"
        alt="Better Sports Logo"
      />
      <div className="navLink">
        <a href="/login">Login</a>
      </div>
      <div className="navLink">
        <a href="/signup">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
