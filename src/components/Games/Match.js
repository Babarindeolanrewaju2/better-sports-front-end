import React, { Fragment } from "react";

import BetButton from "./BetButton";

const Match = props => {
  const gameDetails = props.game.attributes;
  const homeTeamDetails = props.game.meta.homeTeam;
  const awayTeamDetails = props.game.meta.awayTeam;

  return (
    <Fragment>
      <tr>
        <td>{gameDetails.match_date}</td>
        <td>{homeTeamDetails.name}</td>
        <td>{awayTeamDetails.name}</td>
        <td>{gameDetails.one}</td>
        <td>{gameDetails.draw}</td>
        <td>{gameDetails.two}</td>
        <td>{gameDetails.oneDraw}</td>
        <td>{gameDetails.twoDraw}</td>
        <td>
          <BetButton game={props.game} />
        </td>
      </tr>
    </Fragment>
  );
};

export default Match;
