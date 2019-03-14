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
      <div className="navLink">Login</div>
      <div className="navLink">Sign up</div>
    </div>
  );
};

export default Navbar;
