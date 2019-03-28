import React, { Component } from "react";

// connect to Redux state
import { connect } from "react-redux";
import { fetchTeamPlayers } from "../../../../actions/soccerTeamsActions";

import TeamDetails from "./TeamDetails";
import PlayerThumbnail from "./PlayerThumbnail";
import TeamStadium from "./TeamStadium";
import SocialMedia from "./SocialMedia";

import "../../../../styles/SoccerTeam.css";

class SoccerTeamShow extends Component {
  state = {
    players: []
  };

  findTeam = id => {
    return this.props.teams.find(team => {
      return team.id === id;
    });
  };

  mapPlayersToPlayerThumb = () => {
    if (this.state.players.length > 0) {
      return this.state.players.map(player => {
        return (
          <PlayerThumbnail key={player.id} player={player} {...this.props} />
        );
      });
    } else {
      return null;
    }
  };

  componentDidMount() {
    let teamId = this.props.match.params.id;

    fetchTeamPlayers(teamId).then(players => {
      this.setState({ players: players["data"] });
    });
  }

  render() {
    let teamId = this.props.match.params.id;
    let team = this.findTeam(teamId);
    console.log(team);
    if (team === undefined) {
      return (
        <div className="soccerTeamContainer">
          <div className="soccerTeamWait">
            <img
              src="https://media.giphy.com/media/qBYY1bBX10Y6I/giphy.gif"
              alt="loading spinner"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="soccerTeamContainer">
          <div className="socialMedia">
            <SocialMedia team={team} />
          </div>

          <div className="soccerTeamDetails">
            <TeamDetails team={team} />
          </div>

          <hr />

          <div className="teamShowPlayers">
            <div className="teamShowPlayerTeamName">
              <h2>{team.attributes.name} Players:</h2>
            </div>

            <div className="teamShowPlayerPhotos">
              {this.mapPlayersToPlayerThumb()}
            </div>
          </div>

          <hr />

          <div className="teamShowStadium">
            <TeamStadium team={team} />
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
