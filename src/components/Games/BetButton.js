import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// allows game and bet information to be placed into the Redux state
// to then be used by the BetsForm
import { disptachBet } from "../../actions/betActions";

const BetButton = props => {
  // when a user clicks 'place bet', grab the
  // bet info (game and odds) to pass to the BetsForm
  const handleClick = () => {
    props.createBet(props.game);
    props.history.push("/bets/new");
  };

  // reusable button to be used in the games table
  return (
    <button type="button" onClick={handleClick}>
      Place Bet
    </button>
  );
};

// map the action to props
const mapDispatchToProps = dispatch => {
  return {
    createBet: betInfo => disptachBet(dispatch, betInfo)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BetButton);
