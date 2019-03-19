import React from "react";

import { connect } from "react-redux";
import { disptachBet } from "../../actions/betActions";

const BetButton = props => {
  const handleClick = () => {
    props.createBet(props.game);
    props.history.push("/bets/new");
  };

  return (
    <button type="button" onClick={handleClick}>
      Place Bet
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createBet: betInfo => disptachBet(dispatch, betInfo)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BetButton);
