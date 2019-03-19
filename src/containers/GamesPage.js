import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Games from "../components/Games/Games";

const GamesPage = props => {
  return (
    <Fragment>
      <Navbar />
      <Games {...props} />
    </Fragment>
  );
};

export default GamesPage;
