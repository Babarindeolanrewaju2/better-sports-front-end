import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Games from "../components/Games/Games";

const GamesPage = props => {
  return (
    <Fragment>
      <Navbar currentUser={props.currentUser} />
      <Games games={props.games} />
    </Fragment>
  );
};

export default GamesPage;
