import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
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
