import React, { Component, Fragment } from "react";

// makes a specific request to the API for a players details
// done dynamically based on the id, which is in the URL
import { fetchPlayerInfo } from "../../../../actions/soccerTeamsActions";

// styling
import "../../../../styles/PlayerShow.css";

class PlayerShowPage extends Component {
  state = {
    // store player data in local state after the fetch for player
    // data is complete
    player: []
  };

  componentDidMount() {
    // get id from URL
    let playerId = this.props.match.params.id;

    // make call to API and set local state with player info
    fetchPlayerInfo(playerId).then(player => {
      console.log(player);
      this.setState({ player: player["data"] });
    });
  }

  render() {
    // grab player infomation from state
    let player = this.state.player.attributes;

    if (player) {
      return (
        <div className="playerShowContainer">
          <div className="playerInnerContainer">
            <div className="playerPrimaryImageAndInfo">
              <div className="playerShowImage">
                {/* Image of player or stock image if there is no player
                  image in database */}
                <img
                  src={
                    player.profile_image ||
                    "https://cdn.pixabay.com/photo/2012/04/14/15/12/soccer-34248_960_720.png"
                  }
                  alt="Player"
                />
              </div>

              {/* Player primary information */}
              <div className="playerShowPrimaryInfo">
                <h1>{player.full_name}</h1>

                <h3>Team: {player.team_name}</h3>
                <h3>Signed: {player.date_signed}</h3>
                <h3>Nationality: {player.nationality}</h3>
              </div>
            </div>

            {/* Player personal details and description */}
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

              {player.description ? (
                <Fragment>
                  <h2>Description:</h2>
                  <p>{player.description}</p>
                </Fragment>
              ) : null}
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
