import React, { Fragment } from "react";

const BetCard = props => {
  // grab props and set them to local variables for clearn developer experience
  const gameDetails = props.game.attributes;
  const bet = props.bet;

  // table columns in order from left to right:
  // Date, Home Team, Away Team, Home Win, Draw, Away Win, Home Win or Draw,
  // Away Win or Draw, Bet on this game

  if (gameDetails.winner === null) {
    return (
      <Fragment>
        <tr>
          <td>{gameDetails.match_date}</td>
          <td>{gameDetails.matchName}</td>
          <td>{bet.betType}</td>
          <td>{bet.odds}</td>
          <td>${bet.wager}</td>
          <td>Game not yet played</td>
        </tr>
      </Fragment>
    );
  } else if (bet.betType === gameDetails.winner) {
    return (
      <Fragment>
        <tr className="greenBet">
          <td>{gameDetails.match_date}</td>
          <td>{gameDetails.matchName}</td>
          <td>{bet.betType}</td>
          <td>{bet.odds}</td>
          <td>${bet.wager}</td>
          <td>{gameDetails.winner}</td>
        </tr>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <tr className="redBet">
          <td>{gameDetails.match_date}</td>
          <td>{gameDetails.matchName}</td>
          <td>{bet.betType}</td>
          <td>{bet.odds}</td>
          <td>${bet.wager}</td>
          <td>{gameDetails.winner}</td>
        </tr>
      </Fragment>
    );
  }
};

export default BetCard;
