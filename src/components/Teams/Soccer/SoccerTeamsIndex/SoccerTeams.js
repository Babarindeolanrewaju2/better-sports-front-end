import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// this creates a card for each team in the league
import SoccerTeamCard from "./SoccerTeamCard";

// styling
import "../../../../styles/SoccerTeams.css";

const SoccerTeams = props => {
  // make a card for each team
  // give it routerProps so that upon click, the card can push
  // to the TeamShow page
  const mapTeamsToTeamCard = () => {
    return props.teams.map(team => {
      return <SoccerTeamCard key={team.id} team={team} routerProps={props} />;
    });
  };

  // display header and all team cards
  return (
    <div className="soccerTeamsContainer">
      <div className="soccerTeamsHeader">
        <h1>Champions League Teams</h1>
      </div>
      <div className="soccerTeamsCards">{mapTeamsToTeamCard()}</div>
    </div>
  );
};

// get all teams from Redux state
const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

export default connect(mapStateToProps)(SoccerTeams);
