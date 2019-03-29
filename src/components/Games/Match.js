import React, { Fragment } from "react";

// import the 'place a bet' button to be used by table
import BetButton from "./BetButton";

const Match = props => {
  // grab props and set them to local variables for clearn developer experience
  const gameDetails = props.game.attributes;
  const homeTeamDetails = props.game.meta.homeTeam;
  const awayTeamDetails = props.game.meta.awayTeam;

  // table columns in order from left to right:
  // Date, Home Team, Away Team, Home Win, Draw, Away Win, Home Win or Draw,
  // Away Win or Draw, Bet on this game

  if (props.outcome === false) {
    return (
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
          <BetButton game={props.game} {...props} />
        </td>
      </tr>
    );
  } else {
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
          <td>{gameDetails.winner}</td>
        </tr>
      </Fragment>
    );
  }
};

export default Match;
