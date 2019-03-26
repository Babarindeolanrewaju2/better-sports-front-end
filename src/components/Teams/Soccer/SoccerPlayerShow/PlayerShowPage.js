import React, { Component } from "react";

import { fetchPlayerInfo } from "../../../../actions/soccerTeamsActions";

import "../../../../styles/PlayerShow.css";

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
    let player = this.state.player.attributes;

    if (player) {
      return (
        <div className="playerShowContainer">
          <div className="playerInnerContainer">
            <div className="playerPrimaryImageAndInfo">
              <div className="playerShowImage">
                <img
                  src={
                    player.profile_image ||
                    "https://www.minithrowballs.com/images/clipart/sports/Soccer/scab014.svg"
                  }
                  alt="Player"
                />
              </div>

              <div className="playerShowPrimaryInfo">
                <h1>{player.full_name}</h1>

                <h3>Team: {player.team_name}</h3>
                <h3>Signed: {player.date_signed}</h3>
                <h3>Nationality: {player.nationality}</h3>
              </div>
            </div>

            <div className="playerShowDescription">
              <h2>Details:</h2>

              <h4>
                {player.birth_location && `Born: ${player.birth_location}`}
              </h4>
              <h4>
                {player.date_of_birth && `Birthday: ${player.date_of_birth}`}
              </h4>
              <h4>
                {player.contracted_salary &&
                  `Contracted Salary: ${player.contracted_salary}`}
              </h4>
              <h4>{player.height && `Height: ${player.height}`} </h4>

              <h2>Description:</h2>
              <p>{player.description}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PlayerShowPage;

// Player attributes:
// birth_location
// contracted_salary
// date_of_birth
// date_signed
// description
// full_name
// height
// nationality
// position
// profile_image
// team_id
// team_name
// thumbnail
// wage
// weight
