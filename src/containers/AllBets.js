import React, { Fragment } from "react";

// component found in components folder
import Navbar from "../components/Navbar";

// component found in components/Bets folder
import AllBets from "../components/Bets/AllBets/AllBets";

// container for the SignupPage
const SignupPage = props => {
  return (
    <Fragment>
      <Navbar />
      <AllBets {...props} />
    </Fragment>
  );
};

export default SignupPage;
