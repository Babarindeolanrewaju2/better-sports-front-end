import React, { Component } from "react";

import { connect } from "react-redux";
import { makeBet } from "../../actions/betActions";

import "../../styles/BetsForm.css";

class BetsForm extends Component {
  state = {
    betInfo: this.props.betInfo,
    amount: 0,
    winner: "",
    odds: ""
  };

  setAmount = event => {
    this.setState({ ...this.state, amount: event.target.value });
  };

  chooseWinner = event => {
    this.setState({
      ...this.state,
      winner: event.target.name,
      odds: this.props.betInfo.attributes[event.target.value]
    });
  };

  calculatePotentialWin = () => {
    return this.state.amount * parseFloat(this.state.odds);
  };

  handleSubmit = event => {
    event.preventDefault();
    let amount = this.state.amount;
    let odds = this.state.odds;
    let betType = this.state.winner;
    let token = localStorage.getItem("token");
    let game = this.props.betInfo.id;

    if (amount && odds && betType) {
      this.props.newBet(token, amount, odds, game, betType);
    } else {
      alert("Please select a wager amount and an outcome.");
    }
  };

  render() {
    if (this.props.betInfo !== {}) {
      return (
        <div className="betsFormContainer">
          <div className="betsFormForm">
            <form onSubmit={this.handleSubmit}>
              <h1>Make A Bet</h1>
              <p>
                Please select your wager amount and the outcome you are betting
                on.
              </p>
              <hr />
              <h3>Home team: {this.state.betInfo.meta.homeTeam.name}</h3>
              <h3>Away team: {this.state.betInfo.meta.awayTeam.name}</h3>
              <h4>Select a wager:</h4>
              <button type="button" value="50" onClick={this.setAmount}>
                $50
              </button>
              <button type="button" value="100" onClick={this.setAmount}>
                $100
              </button>
              <button type="button" value="250" onClick={this.setAmount}>
                $250
              </button>
              <button type="button" value="500" onClick={this.setAmount}>
                $500
              </button>
              <label>$</label>
              <input
                type="text"
                placeholder="Enter Amount"
                onChange={this.setAmount}
              />
              <br />
              <h4>Select a outcome:</h4>
              <button
                type="button"
                name="Home Win"
                value="one"
                onClick={this.chooseWinner}
              >
                {this.state.betInfo.meta.homeTeam.name} win
              </button>
              <button
                type="button"
                name="Draw"
                value="draw"
                onClick={this.chooseWinner}
              >
                Draw
              </button>
              <button
                type="button"
                name="Away Win"
                value="two"
                onClick={this.chooseWinner}
              >
                {this.state.betInfo.meta.awayTeam.name} win
              </button>
              <button
                type="button"
                name="Home Win or Draw"
                value="oneDraw"
                onClick={this.chooseWinner}
              >
                {this.state.betInfo.meta.homeTeam.name} Win or Draw
              </button>
              <button
                type="button"
                name="Away Win or Draw"
                value="twoDraw"
                onClick={this.chooseWinner}
              >
                {this.state.betInfo.meta.awayTeam.name} Win or Draw
              </button>
              <br />
              <br />
              <div className="finalBet">
                <h3>Your prediction:</h3>
                <div className="prediciton">
                  {this.state.winner === "" ? "Guess" : this.state.winner}
                </div>
                <div className="odds">
                  {this.state.odds === "" ? "Odds" : this.state.odds}
                </div>
                <div className="wager">
                  {this.state.amount === 0 ? "Wager" : this.state.amount}
                </div>
                <div className="potential">
                  {this.state.odds === ""
                    ? "Potential Wine"
                    : `${this.calculatePotentialWin()}`}
                </div>
              </div>
              <br />
              <p>
                Betting is a risk, and by placing this bet you acknowledge that
                you take that risk willingly.
              </p>
              <div className="clearfix">
                <button type="button" className="cancelbtn">
                  Cancel
                </button>
                <button type="submit" className="signupbtn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStateToProps = state => {
  return {
    betInfo: state.betInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newBet: (token, amt, odds, game, betType) =>
      makeBet(dispatch, token, amt, odds, game, betType)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BetsForm);
