import React, { Component, Fragment } from "react";

// connect to Redux state
import { connect } from "react-redux";
import { fetchGames } from "../../../actions/fetchActions";

// each seperate bet is returned as a row for a table
import AllBetsCards from "./AllBetsCards";

// styling
import "../../../styles/AllBets.css";

class MyBets extends Component {
  // find the game that the bet is made on so that each bet will be able to display
  // game information
  findGameObject = id => {
    return this.props.games.find(game => {
      return parseInt(game.id) === id;
    });
  };

  // create all bet rows for the table to be displayed
  mapBetInfoToBetCard = () => {
    return this.props.bets.bets.map(bet => {
      // find the game
      let game = this.findGameObject(bet.game_id);
      // create all rows for the table based on the number of bets a person has made
      return <AllBetsCards key={bet.id} bet={bet} game={game} />;
    });
  };

  // get all games from the API
  componentDidMount() {
    this.props.getGames();
  }

  render() {
    // if the user has a bets prop
    if (this.props.bets) {
      return (
        <div className="betsContainer">
          <div className="betsList">
            <h1>Your Bets</h1>
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
                  {/*Dispaly all bet rows in reverse order so that we
                    see all the most recent bets first */}
                  <tbody>{this.mapBetInfoToBetCard().reverse()}</tbody>
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

// get an updated vesion of all games, called in componentDidMount
function mapDispatchToProps(dispatch) {
  return {
    getGames: () => fetchGames(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyBets);
