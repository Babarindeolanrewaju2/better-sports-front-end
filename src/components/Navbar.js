import React from "react";

import "../styles/Navbar.css";

const Navbar = props => {
  // let user = null;
  //
  // const getUser = () => {
  //   user = props.currentUser.attributes;
  // };
  //
  // if (localStorage.getItem("token")) {
  //   setTimeout(() => getUser, 3000);
  // }
  //
  // const logMeOut = () => {
  //   localStorage.removeItem("token");
  // };
  //
  // if (user) {
  //   return (
  //     <div className="nav">
  //       <img
  //         className="navLogo"
  //         src="http://localhost:3000/images/betterSportsLogo.png"
  //         alt="Better Sports Logo"
  //       />
  //       <div className="navLink">
  //         <a href="/dashboard">{user.email}</a>
  //       </div>
  //       <div className="navLink">
  //         <a href="/" onClick={logMeOut}>
  //           Logout
  //         </a>
  //       </div>
  //     </div>
  //   );
  // } else {
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
  // }
};

export default Navbar;
