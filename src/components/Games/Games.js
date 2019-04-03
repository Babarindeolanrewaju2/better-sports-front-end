import React, { Fragment } from "react";

//import FutureGames and PastGames components to display on page for users to review
import FutureGames from "./FutureGames";
import PastGames from "./PastGames";

import "../../styles/Games.css";

// create variable to hold today's date for comparison for the games returned
// from the games API -- this comparision will help find past and future games
const today = new Date();

const Games = props => {
  // seperate previous games, which will have a game
  // outcome and no longer be eligible for bets
  const getPastGames = () => {
    return props.games.filter(game => {
      return new Date(game.attributes.match_date) < today;
    });
  };

  // seperate future games, which will have a game
  // outcome and no longer be eligible for bets
  const getFutureGames = () => {
    return props.games.filter(game => {
      return new Date(game.attributes.match_date) >= today;
    });
  };

  return (
    <div className="gamesContainer">
      <div className="gamesList">
        {props.games.length === 0 ? (
          <h1>Loading</h1>
        ) : (
          <Fragment>
            <div className="futureGamesList">
              <FutureGames futureGames={getFutureGames()} {...props} />
              {/* props (rourterProps in this instance)
                  is passed here so that the future games will have access to
                  the abilitiy to push to the next screen*/}
            </div>
            <div className="pastGamesList">
              <PastGames pastGames={getPastGames()} />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Games;
