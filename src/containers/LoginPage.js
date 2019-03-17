import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
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
