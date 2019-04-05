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
  // --------------------------------------------------------------------------
  // if this is a future game, their will be no outcome props, and this will return
  // a table with a bet button
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
        {gameDetails.one !== "TBD" &&
        gameDetails.draw !== "TBD" &&
        gameDetails.oneDraw !== "TBD" ? (
          <td>
            <BetButton game={props.game} {...props} />{" "}
          </td>
        ) : (
          <td>Odds not yet listed</td>
        )}
      </tr>
    );
  } else {
    // if this is a game that has already happened, then this will return a
    // table that has an outcome column
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
