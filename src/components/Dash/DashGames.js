import React, { Fragment } from "react";

import FutureGames from "../Games/FutureGames";

const DashGames = props => {
  // need today's date to compare to for future games
  const today = new Date();

  // determine all future games
  const getFutureGames = () => {
    return props.games.filter(game => {
      return new Date(game.attributes.match_date) >= today;
    });
  };

  //only show the next three upcoming games on the dashboard
  const limitGames = getFutureGames().slice(0, 3);

  return (
    <Fragment>
      {/* have button that allows users to click through to see all
        of their bets */}
      <button className="button" onClick={() => props.history.push("/games")}>
        See all games
      </button>
      {/* Pass routerProps and limited games to the component */}

      <div className="gamesList">
        <FutureGames {...props} futureGames={limitGames} {...props} />
      </div>
    </Fragment>
  );
};

export default DashGames;
