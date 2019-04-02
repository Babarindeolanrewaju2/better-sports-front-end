import React, { Fragment } from "react";

import Match from "./Match";

import "../../styles/Games.css";

const PastGames = props => {
  // create all match rows for the table to be displayed
  const mapGameInfoToMatchCard = () => {
    return props.pastGames.map(game => {
      return <Match key={game.id} game={game} {...props} />;
    });
  };

  return (
    <Fragment>
      <h1>Past Games</h1>

      {props.pastGames.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <Fragment>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Home Win</th>
                <th>Draw</th>
                <th>Away Win</th>
                <th>Home Win/Draw</th>
                <th>Away Win/Draw</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>{mapGameInfoToMatchCard()}</tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PastGames;
