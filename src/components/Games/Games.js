import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchGames } from "../../actions/fetchActions";

import Match from "./Match";

import "../../styles/Games.css";

class Games extends Component {
  componentDidMount() {
    // get all games from API
    this.props.getGames();
  }

  // create all match rows for the table to be displayed
  mapGameInfoToMatchCard = () => {
    return this.props.games.map(game => {
      return <Match key={game.id} game={game} />;
    });
  };

  render() {
    return (
      <div className="gamesContainer">
        <h1>Future Games</h1>
        <div className="gamesList">
          {this.props.games.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            <Fragment>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Home Team</th>
                    <th>Away Team</th>
                    <th>Home Win</th>
                    <th>Draw</th>
                    <th>Away Win</th>
                    <th>Home Win or Draw</th>
                    <th>Away Win or Draw</th>
                    <th>Bet on this game</th>
                  </tr>
                </thead>
                <tbody>{this.mapGameInfoToMatchCard()}</tbody>
              </table>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

// allow method to be set as a prop
function mapDispatchToProps(dispatch) {
  return {
    getGames: () => fetchGames(dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Games);
