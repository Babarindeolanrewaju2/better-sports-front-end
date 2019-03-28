import React, { Component } from "react";

// connect to Redux state
import { connect } from "react-redux";

// gets all players for the team from the API
import { fetchTeamPlayers } from "../../../../actions/soccerTeamsActions";

// component shows primary information and description
import TeamDetails from "./TeamDetails";
//component creates player cards for each team member
import PlayerThumbnail from "./PlayerThumbnail";
// team's stadium information
import TeamStadium from "./TeamStadium";
// creates social medial sidebar
import SocialMedia from "./SocialMedia";

// styling
import "../../../../styles/SoccerTeam.css";

class SoccerTeamShow extends Component {
  state = {
    // all team players stored after fetch
    players: []
  };

  // find team id from the URL
  findTeam = id => {
    return this.props.teams.find(team => {
      return team.id === id;
    });
  };

  // create each player card after player information is returned from the API
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
    // grab team id from URL
    let teamId = this.props.match.params.id;

    // get the team's players from API
    fetchTeamPlayers(teamId).then(players => {
      this.setState({ players: players["data"] });
    });
  }

  render() {
    // grab team id from URL and then find the team from all teams
    let teamId = this.props.match.params.id;
    let team = this.findTeam(teamId);

    // render loading soccer gif if team has not been found yet
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
      // render all of team elements
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

// all teams needed from state so that the individual team can be found
// based on the id from the URL
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
