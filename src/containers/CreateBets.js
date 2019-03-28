import React, { Fragment } from "react";

// component found in components folder
import Navbar from "../components/Navbar";

// component found in components/Bets folder
import BetsForm from "../components/Bets/BetsForm";

// container to render BetsForm
const CreateBets = props => {
  return (
    <Fragment>
      <Navbar />
      <BetsForm {...props} />
    </Fragment>
  );
};

export default CreateBets;
