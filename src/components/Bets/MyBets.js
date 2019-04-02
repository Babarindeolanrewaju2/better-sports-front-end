import React, { Fragment } from "react";

// connect to Redux state
import { connect } from "react-redux";

// the bet card creates the table rows for a user's bets
import BetCard from "./BetCard";

// styling
import "../../styles/Games.css";

// MyBets is used on the dashboad. This allows us to limit the number of bets
// showed on the dash. If all bets are needed, us the AllBets component
const MyBets = props => {
  // find the game the bet is placed on so that information be used in conjunction
  // with the bet information (game name, odds, etc)
  const findGameObject = id => {
    return props.games.find(game => {
      return parseInt(game.id) === id;
    });
  };

  // create all bet rows for the table to be displayed
  const mapBetInfoToBetCard = () => {
    return props.limitBets.map(bet => {
      let game = findGameObject(bet.game_id);
      return <BetCard key={bet.id} bet={bet} game={game} />;
    });
  };

  // if this prop exists, render the below information
  if (props.limitBets) {
    return (
      <div className="gamesContainer">
        <div className="gamesList">
          <h1>Your Bets</h1>
          {/* Assure that the games information exits */}
          {props.games.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            <Fragment>
              {/* Render the table and the table header with the appropriate column names  */}
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Home vs. Away</th>
                    <th>Your bet</th>
                    <th>Odds</th>
                    <th>Wager</th>
                  </tr>
                </thead>
                {/* Invoke the function to create all table rows based on the bets provided to the componet */}
                <tbody>{mapBetInfoToBetCard()}</tbody>
              </table>
            </Fragment>
          )}
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

// listen to state to get all bets
function mapStateToProps(state) {
  return {
    games: state.games
  };
}

export default connect(mapStateToProps)(MyBets);
