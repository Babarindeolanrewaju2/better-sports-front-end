import React, { Component } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import the function to allow a user to make a new bet
import { makeBet } from "../../actions/betActions";

// styling
import "../../styles/BetsForm.css";

class BetsForm extends Component {
  state = {
    // make all bet info available in state
    betInfo: this.props.betInfo,
    // wager amount is initialized to $0
    amount: 0,
    // when a user selects a winner it will be stored in state,
    // this will allow users to change their mind, if they need to, and only their
    // final decision stored in local state will be POSTed when they submit
    winner: "",
    // odds for their selected bet type will be stored to be used in the
    // POST when a user submits their final bet
    odds: ""
  };

  // changes the wager amount in state
  setAmount = event => {
    if (event.target.value <= 10000) {
      this.setState({ ...this.state, amount: event.target.value });
      document.getElementById("wagerInput").value = "";
    } else {
      this.setState({ ...this.state, amount: 10000 });
      event.target.value = 10000;
    }
  };

  setAmountForInputField = event => {
    if (event.target.value <= 10000) {
      this.setState({ ...this.state, amount: event.target.value });
    } else {
      this.setState({ ...this.state, amount: 10000 });
      event.target.value = 10000;
    }
  };

  // changes the winner AND odds values in state
  chooseWinner = event => {
    this.setState({
      ...this.state,
      winner: event.target.name,
      odds: this.props.betInfo.attributes[event.target.value]
    });
  };

  // do the math the calculate the potential value of a win
  // IF a user selects the winning outcome
  calculatePotentialWin = () => {
    return this.state.amount * parseFloat(this.state.odds);
  };

  // upon submit grab the values in state (amount, odds, winner, game id )
  // grab token to verify approved user in the back end
  handleSubmit = event => {
    event.preventDefault();
    let amount = this.state.amount;
    let odds = this.state.odds;
    let betType = this.state.winner;
    let token = localStorage.getItem("token");
    let game = this.props.betInfo.id;

    // verify that user has selected values for all items required to make
    // a bet -- otherwise alert error message
    if (amount && odds && betType) {
      // checks to see that the wager amount is less than or equal to your account balance
      if (
        parseInt(amount) <=
        parseInt(this.props.user.attributes.accounts[0].balance)
      ) {
        // creates bet, and then pushes you to the user dashboard
        this.props.newBet(token, amount, odds, game, betType);
        this.props.history.push("/dashboard");
      } else {
        alert(
          "Please choose a wager amount that is less than or equal to your account balance."
        );
      }
    } else {
      alert("Please select a wager amount and an outcome.");
    }
  };

  render() {
    // when bet info is available, display a betting form
    if (this.props.betInfo !== {}) {
      return (
        <div className="betsFormContainer">
          <div className="betsFormForm">
            <form onSubmit={this.handleSubmit}>
              <h1>Make A Bet</h1>
              {/* Instructions for user */}
              <p>
                Please select your wager amount and the outcome you are betting
                on. <span>Maximum bet of $10,000.</span>
              </p>
              <hr />

              <h3>
                {/* Home team name */}
                <span>Home team:</span> {this.state.betInfo.meta.homeTeam.name}
              </h3>
              <h3>
                {/* Away team name */}
                <span>Away team:</span> {this.state.betInfo.meta.awayTeam.name}
              </h3>
              {/* Home here the user will select the value of their wager */}
              <div className="betWager">
                <h4>Select a wager:</h4>
                <div className="betWagerBtn">
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
                  <input
                    id="wagerInput"
                    type="text"
                    placeholder="Enter Amount $"
                    onChange={this.setAmountForInputField}
                  />
                </div>
              </div>

              {/* Here the user selects an outcome -- ex. Home Win, Draw, etc. */}
              <div className="betOutcome">
                <h4>Select a outcome:</h4>
                <div className="betOutcomeBtn">
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
                    name="Away Win"
                    value="two"
                    onClick={this.chooseWinner}
                  >
                    {this.state.betInfo.meta.awayTeam.name} win
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
                </div>
              </div>

              {/* Preview the user's final bet and outcome  */}
              <div className="finalBet">
                <h3>Your prediction:</h3>

                <table>
                  <thead>
                    <tr>
                      <th> Prediction </th>
                      <th> Odds </th>
                      <th> Wager </th>
                      <th> Potential Win </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        {this.state.winner === ""
                          ? "Select a winner"
                          : this.state.winner}{" "}
                      </td>
                      <td>
                        {" "}
                        {this.state.odds === ""
                          ? "Select a winner"
                          : this.state.odds}{" "}
                      </td>
                      <td>
                        {" "}
                        {this.state.amount === 0
                          ? " Select your wager"
                          : `$ ${this.state.amount}`}{" "}
                      </td>
                      <td>
                        {" "}
                        {this.state.odds === ""
                          ? "Select winner and wager"
                          : `$ ${this.calculatePotentialWin()}`}{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              {/* Gambling warning for user: */}
              <p>
                Betting is a risk, and by placing this bet you acknowledge that
                you take that risk willingly.
              </p>
              <div className="clearfix">
                {/* when the cancel btn is clicked the user goes back to the
                  last page that they were on */}
                <button
                  type="button"
                  className="cancelbtn"
                  onClick={() => {
                    this.props.history.goBack();
                  }}
                >
                  Cancel
                </button>
                {/* onSubmit action is handled on the form */}
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

// user needs access to the betting odds for a specific game
const mapStateToProps = state => {
  return {
    betInfo: state.betInfo,
    user: state.currentUser
  };
};

// set the make bet action to the props of this componet
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
