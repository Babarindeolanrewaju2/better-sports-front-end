import React, { Fragment } from "react";

// component found in components folder
import Navbar from "../components/Navbar";
// components found in components/Games folder
import Games from "../components/Games/Games";

// component to show all games that could be bet on
// this is different than games in the Dash folder bc that will
// limit the games show. This page shows ALL eligable games
const GamesPage = props => {
  return (
    <Fragment>
      <Navbar />
      <Games {...props} />
    </Fragment>
  );
};

export default GamesPage;
