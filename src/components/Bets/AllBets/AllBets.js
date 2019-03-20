import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchGames } from "../../../actions/fetchActions";
import AllBetsCards from "./AllBetsCards";

import "../../../styles/Games.css";

class MyBets extends Component {
  //const bets = this.props.bets;

  findGameObject = id => {
    return this.props.games.find(game => {
      return parseInt(game.id) === id;
    });
  };
  // create all bet rows for the table to be displayed
  mapBetInfoToBetCard = () => {
    return this.props.bets.bets.map(bet => {
      let game = this.findGameObject(bet.game_id);
      return <AllBetsCards key={bet.id} bet={bet} game={game} />;
    });
  };

  componentDidMount() {
    this.props.getGames();
  }

  render() {
    if (this.props.bets) {
      return (
        <div className="gamesContainer">
          <h1>Your Bets</h1>
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
                      <th>Outcome</th>
                    </tr>
                  </thead>
                  <tbody>{this.mapBetInfoToBetCard()}</tbody>
                </table>
              </Fragment>
            )}
          </div>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

// listen to state to get all bets
function mapStateToProps(state) {
  return {
    bets: state.currentUser.attributes,
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGames: () => fetchGames(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyBets);
