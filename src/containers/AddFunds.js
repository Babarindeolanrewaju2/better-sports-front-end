import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import IncreaseBalance from "../components/Balance/IncreaseBalance";

const AddFunds = props => {
  return (
    <Fragment>
      <Navbar />
      <IncreaseBalance {...props} />
    </Fragment>
  );
};

export default AddFunds;
