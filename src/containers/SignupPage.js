import React, { Fragment } from "react";

// components found in components folder
import Navbar from "../components/Navbar";
// components found in components/loginSignup folder
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
