import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

//import Match from "./Match";

import "../../styles/Games.css";

const MyBets = props => {
  // create all match rows for the table to be displayed
  mapGameInfoToMatchCard = () => {
    return this.props.games.map(game => {
      return <Match key={game.id} game={game} {...this.props} />;
    });
  };
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
                  <th>Home vs. Away</th>
                  <th>Your bet</th>
                  <th>Odds</th>
                  <th>Wager</th>
                </tr>
              </thead>
              <tbody>{this.mapGameInfoToMatchCard()}</tbody>
            </table>
          </Fragment>
        )}
      </div>
    </div>
  );
};

// listen to state to get all bets
function mapStateToProps(state) {
  return {
    bets: state.currentUser.attributes.bets,
    games: state.games
  };
}

export default connect(mapStateToProps)(Games);
