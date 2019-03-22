import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
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
