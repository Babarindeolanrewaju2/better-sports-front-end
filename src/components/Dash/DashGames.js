import React, { Fragment } from "react";

import Games from "../Games/Games";

const DashGames = props => {
  //only show the next three upcoming games on the dashboard
  const limitGames = props.games.slice(0, 3);

  return (
    <Fragment>
      {/* have a link btn that allows users to click through to see all
        of their bets */}
      <a href="/games" className="button" role="button">
        See all games
      </a>
      {/* Pass routerProps and limited games to the component */}
      <Games {...props} games={limitGames} />
    </Fragment>
  );
};

export default DashGames;
