import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import SoccerTeams from "../components/Teams/Soccer/SoccerTeamsIndex/SoccerTeams";

const TeamsPage = props => {
  return (
    <Fragment>
      <Navbar />
      <SoccerTeams />
    </Fragment>
  );
};

export default TeamsPage;
