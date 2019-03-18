import React, { Fragment } from "react";
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
