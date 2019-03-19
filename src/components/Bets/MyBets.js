import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import BetCard from "./BetCard";

import "../../styles/Games.css";

const MyBets = props => {
  const bets = props.bets;
  console.log("GAMMMMES", props.games);
  const findGameObject = id => {
    return props.games.find(game => {
      return parseInt(game.id) === id;
    });
  };
  // create all bet rows for the table to be displayed
  const mapBetInfoToBetCard = () => {
    return props.bets.bets.map(bet => {
      let game = findGameObject(bet.game_id);
      return <BetCard key={bet.id} bet={bet} game={game} />;
    });
  };

  if (props.bets) {
    return (
      <div className="gamesContainer">
        <h1>Your Bets</h1>
        <div className="gamesList">
          {props.games.length === 0 ? (
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
                <tbody>{mapBetInfoToBetCard()}</tbody>
              </table>
            </Fragment>
          )}
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

// listen to state to get all bets
function mapStateToProps(state) {
  return {
    bets: state.currentUser.attributes,
    games: state.games
  };
}

export default connect(mapStateToProps)(MyBets);
