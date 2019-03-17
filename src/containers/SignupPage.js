import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Signup from "../components/loginSignup/Signup";

const SignupPage = props => {
  return (
    <Fragment>
      <Navbar />
      <Signup {...props} />
    </Fragment>
  );
};

export default SignupPage;
