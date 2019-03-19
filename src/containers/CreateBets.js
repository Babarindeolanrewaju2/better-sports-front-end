import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import BetsForm from "../components/Bets/BetsForm";

const CreateBets = props => {
  return (
    <Fragment>
      <Navbar />
      <BetsForm />
    </Fragment>
  );
};

export default CreateBets;
