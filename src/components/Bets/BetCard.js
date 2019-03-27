import React, { Fragment } from "react";

const BetCard = props => {
  // grab props and set them to local variables for clearn developer experience
  const gameDetails = props.game.attributes;
  const bet = props.bet;

  // table columns in order from left to right:
  // Date, Home Team, Away Team, Home Win, Draw, Away Win, Home Win or Draw,
  // Away Win or Draw, Bet on this game
  return (
    <Fragment>
      <tr>
        {/* column for match date */}
        <td>{gameDetails.match_date}</td>

        {/* column for match name - which is Home Team and Away Team combined  */}
        <td>{gameDetails.matchName}</td>

        {/* column for match bet - which is one of five options */}
        <td>{bet.betType}</td>

        {/* column for match odds based on the type of bet choosen */}
        <td>{bet.odds}</td>

        {/* column for amount a user bet on this game  */}
        <td>${bet.wager}</td>
      </tr>
    </Fragment>
  );
};

export default BetCard;
