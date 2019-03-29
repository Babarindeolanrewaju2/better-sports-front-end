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
    <div className="gamesContainer">
      <h1>Past Games</h1>
      <div className="gamesList">
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
                  <th>Home Win or Draw</th>
                  <th>Away Win or Draw</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>{mapGameInfoToMatchCard()}</tbody>
            </table>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default PastGames;
