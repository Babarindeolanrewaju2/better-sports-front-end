import React, { Component, Fragment } from "react";

// connect to Redux state
import { connect } from "react-redux";
// import function to get all games from the API
import { fetchGames } from "../../actions/fetchActions";
//import FutureGames and PastGames components to display on page for users to review
import FutureGames from "./FutureGames";
import PastGames from "./PastGames";

import "../../styles/Games.css";

// create variable to hold today's date for comparison for the games returned
// from the games API -- this comparision will help find past and future games
const today = new Date();

class Games extends Component {
  componentDidMount() {
    // get all games from API
    this.props.getGames();
  }

  // seperate previous games, which will have a game
  // outcome and no longer be eligible for bets
  getPastGames = () => {
    return this.props.games.filter(game => {
      return new Date(game.attributes.match_date) < today;
    });
  };

  // seperate future games, which will have a game
  // outcome and no longer be eligible for bets
  getFutureGames = () => {
    return this.props.games.filter(game => {
      return new Date(game.attributes.match_date) >= today;
    });
  };

  render() {
    return (
      <div className="gamesContainer">
        <div className="gamesList">
          {this.props.games.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            <Fragment>
              <div className="futureGamesList">
                <FutureGames
                  futureGames={this.getFutureGames()}
                  {...this.props}
                />
                {/*this.props (rourterProps in this instance)
                  is passed here so that the future games will have access to
                  the abilitiy to push to the next screen*/}
              </div>
              <div className="pastGamesList">
                <PastGames pastGames={this.getPastGames()} />
              </div>
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
