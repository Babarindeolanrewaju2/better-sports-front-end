import React, { Fragment } from "react";

// components found in components folder
import Navbar from "../components/Navbar";
// components found in components/Teams folder
import SoccerTeams from "../components/Teams/Soccer/SoccerTeamsIndex/SoccerTeams";

// goes to TEAMS => SOCCER TEAMS INDEX folder
const TeamsPage = props => {
  return (
    <Fragment>
      <Navbar />
      <SoccerTeams {...props} />
    </Fragment>
  );
};

export default TeamsPage;
