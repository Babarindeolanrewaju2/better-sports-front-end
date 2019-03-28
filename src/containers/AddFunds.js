import React, { Fragment } from "react";

// component found in components folder
import Navbar from "../components/Navbar";

// component found in components/Balance folder
import IncreaseBalance from "../components/Balance/IncreaseBalance";

// container to display nav and AddFunds components
const AddFunds = props => {
  return (
    <Fragment>
      <Navbar />
      <IncreaseBalance {...props} />
    </Fragment>
  );
};

export default AddFunds;
