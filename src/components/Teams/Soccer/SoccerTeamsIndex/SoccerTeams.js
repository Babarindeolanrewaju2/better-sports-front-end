import React from "react";

// connect to Redux state
import { connect } from "react-redux";

import SoccerTeamCard from "./SoccerTeamCard";

import "../../../../styles/SoccerTeams.css";

const SoccerTeams = props => {
  const mapTeamsToTeamCard = () => {
    return props.teams.map(team => {
      return <SoccerTeamCard key={team.id} team={team} routerProps={props} />;
    });
  };

  return (
    <div className="soccerTeamsContainer">
      <div className="soccerTeamsHeader">
        <h1>Champions League Teams</h1>
      </div>
      <div className="soccerTeamsCards">{mapTeamsToTeamCard()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

export default connect(mapStateToProps)(SoccerTeams);
