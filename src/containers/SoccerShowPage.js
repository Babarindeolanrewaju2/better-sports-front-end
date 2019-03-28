import React, { Fragment } from "react";

// components found in components folder
import Navbar from "../components/Navbar";
// components found in components/Teams folder
import SoccerTeamShow from "../components/Teams/Soccer/SoccerTeamShow/SoccerTeamShow";

// soccer team show page -- individual team and all of its players
const SoccerShowPage = props => {
  return (
    <Fragment>
      <Navbar />
      <SoccerTeamShow {...props} />
    </Fragment>
  );
};

export default SoccerShowPage;
