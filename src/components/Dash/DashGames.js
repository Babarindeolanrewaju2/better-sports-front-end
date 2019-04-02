import React, { Fragment } from "react";

import FutureGames from "../Games/FutureGames";

const DashGames = props => {
  //only show the next three upcoming games on the dashboard

  // need today's date to compare to for future games
  const today = new Date();

  // determine all future games
  const getFutureGames = () => {
    return props.games.filter(game => {
      return new Date(game.attributes.match_date) >= today;
    });
  };

  const limitGames = getFutureGames().slice(0, 3);

  return (
    <Fragment>
      {/* have a link btn that allows users to click through to see all
        of their bets */}
      <a href="/games" className="button" role="button">
        See all games
      </a>
      {/* Pass routerProps and limited games to the component */}
      <FutureGames {...props} futureGames={limitGames} {...props} />
    </Fragment>
  );
};

export default DashGames;
