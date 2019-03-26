import React, { Component } from "react";

import { fetchPlayerInfo } from "../../../../actions/soccerTeamsActions";

import "../../../../styles/SoccerTeam.css";

class PlayerShowPage extends Component {
  state = {
    player: []
  };

  componentDidMount() {
    let playerId = this.props.match.params.id;

    fetchPlayerInfo(playerId).then(player => {
      console.log(player);
      this.setState({ player: player["data"] });
    });
  }

  render() {
    console.log(this.state.player);
    return null;
  }
}

export default PlayerShowPage;

// Player attributes:
