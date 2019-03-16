import React, { Fragment } from "react";

import Games from "../Games/Games";

const DashGames = props => {
  const limitGames = props.games.slice(0, 3);

  return (
    <Fragment>
      <Games games={limitGames} />
    </Fragment>
  );
};

export default DashGames;
