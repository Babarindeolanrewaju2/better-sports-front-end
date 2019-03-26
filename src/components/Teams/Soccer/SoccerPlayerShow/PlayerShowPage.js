import React, { Component } from "react";

import { fetchTeamPlayers } from "../../../../actions/soccerTeamsActions";

import "../../../../styles/SoccerTeam.css";

class PlayerShowPage extends Component {
  state = {
    player: []
  };

  componentDidMount() {
    let playerId = this.props.match.params.id;

    fetchPlayerInfo(playerId).then(player => {
      this.setState({ player: player["data"] });
    });
  }

  render() {
    let teamId = this.props.match.params.id;
    let team = this.findTeam(teamId);

    return null;
  }
}

export default PlayerShowPage;

// Player attributes:
