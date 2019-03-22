import React from "react";

import { connect } from "react-redux";
import { setSelectedPlayer } from "../../../../actions/soccerTeamsActions";

//import SoccerTeamCard from "./SoccerTeamCard";

import "../../../../styles/SoccerTeams.css";

const SoccerTeamShow = props => {
  console.log(props.selectedTeam);
  console.log(props.teams);

  if (props.selectedTeam) {
    return (
      <div className="soccerTeamsContainer">
        <div className="soccerTeamsHeader">
          <img
            src="https://media.giphy.com/media/qBYY1bBX10Y6I/giphy.gif"
            alt="loading spinner"
          />
        </div>
      </div>
    );
  } else {
    let team = props.selectedTeam.attributes;
    return (
      <div className="soccerTeamsContainer">
        <div className="soccerTeamsHeader">
          <h1>{team.name}</h1>
          <h3>{team.stadium_location}</h3>
          <h3>{team.stadium_location}</h3>
          <img src={team.team_logo} alt="team logo" />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    teams: state.teams,
    selectedTeam: state.selectedTeam
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedPlayer: player => setSelectedPlayer(dispatch, player)
  };
};

export default connect(mapStateToProps)(SoccerTeamShow);

// TEAM attributes:
// altName
// description
// facebook
// founded
// home_stadium
// instagram
// league
// manager
// name
// stadium_capacity
// stadium_description
// stadium_location
// stadium_thumbnail
// team_jersey
// team_logo
// twitter
// website
