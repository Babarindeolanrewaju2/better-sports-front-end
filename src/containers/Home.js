import React, { Fragment } from "react";

// components found in components folder
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";

const Home = props => {
  return (
    <Fragment>
      <Navbar />
      <Homepage />
    </Fragment>
  );
};

export default Home;
