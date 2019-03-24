import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchTeamPlayers } from "../../../../actions/soccerTeamsActions";

//import SoccerTeamCard from "./SoccerTeamCard";

import "../../../../styles/SoccerTeams.css";

class SoccerTeamShow extends Component {
  state = {
    players: {}
  };

  findTeam = id => {
    return this.props.teams.find(team => {
      return team.id === id;
    });
  };

  componentDidMount() {
    let teamId = this.props.match.params.id;
    console.log("ID", teamId);
    fetchTeamPlayers(teamId).then(players => {
      //console.log(players);
      this.setState({ players: players["data"] });
    });
  }

  render() {
    let teamId = this.props.match.params.id;
    let team = this.findTeam(teamId);
    console.log(this.state.players);
    if (team === undefined) {
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
      console.log(team.attributes);
      return (
        <div className="soccerTeamContainer">
          <div className="soccerTeamsHeader">
            <h1>{team.attributes.name}</h1>
          </div>
          <h3>{team.attributes.stadium_location}</h3>

          <img src={team.attributes.team_logo} alt="team logo" />
          <p>{team.attributes.description}</p>
          <hr />

          <div className="teamShowPlayers">
            <h2>Players</h2>
          </div>

          <div className="teamShowStadium">
            <h2>{team.attributes.home_stadium}</h2>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams
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
