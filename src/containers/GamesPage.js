import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Games from "../components/Games";

const GamesPage = props => {
  return (
    <Fragment>
      <Navbar />
      <Games games={props.games} teams={props.teams} />
    </Fragment>
  );
};

export default GamesPage;
