import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import AllBets from "../components/Bets/AllBets/AllBets";

const SignupPage = props => {
  return (
    <Fragment>
      <Navbar />
      <AllBets {...props} />
    </Fragment>
  );
};

export default SignupPage;
