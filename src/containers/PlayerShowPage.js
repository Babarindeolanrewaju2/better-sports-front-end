import React, { Fragment } from "react";

// components found in components folder
import Navbar from "../components/Navbar";

// components found in components/Teams folder
import PlayerShowPage from "../components/Teams/Soccer/SoccerPlayerShow/PlayerShowPage";

const SoccerShowPage = props => {
  return (
    <Fragment>
      <Navbar />
      <PlayerShowPage {...props} />
    </Fragment>
  );
};

export default SoccerShowPage;
