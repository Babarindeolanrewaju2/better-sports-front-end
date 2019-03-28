import React, { Fragment } from "react";

// components found in components folder
import Navbar from "../components/Navbar";

// components found in components/loginSignup folder
import Login from "../components/loginSignup/Login";

const SignupPage = props => {
  return (
    <Fragment>
      <Navbar />
      <Login {...props} />
    </Fragment>
  );
};

export default SignupPage;
