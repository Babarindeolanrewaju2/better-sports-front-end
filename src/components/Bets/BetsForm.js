import React, { Component } from "react";

import { connect } from "react-redux";
//import { signup } from "../../actions/fetchActions";

import "../../styles/Signup.css";

class BetsForm extends Component {
  state = {
    betInfo: this.props.betInfo,
    amount: 0,
    winner: ""
  };

  handleSubmit = () => {
    console.log("submitted");
  };

  render() {
    console.log(this.state.checked);
    if (this.props.betInfo !== {}) {
      return (
        <div className="signupContainer">
          <div className="signupForm">
            <form onSubmit={this.handleSubmit}>
              <h1>Make A Bet</h1>
              <p>
                Please select your wager amount and the outcome you are betting
                on.
              </p>
              <hr />
              <button type="button" value="50" name="amount">
                $50
              </button>
              <button type="button" value="100" name="amount">
                $100
              </button>
              <button type="button" value="250" name="amount">
                $250
              </button>
              <button type="button" value="500" name="amount">
                $500
              </button>
              <label>$</label>
              <input type="text" name="addValue" placeholder="Enter Amount" />
              <br />
              <br />
              <button type="button" value="50" name="amount">
                {this.state.betInfo.meta.homeTeam.name} win
              </button>
              <button type="button" value="100" name="amount">
                Draw
              </button>
              <button type="button" value="250" name="amount">
                {this.state.betInfo.meta.awayTeam.name} win
              </button>
              <button type="button" value="500" name="amount">
                {this.state.betInfo.meta.homeTeam.name} or draw
              </button>
              <button type="button" value="500" name="amount">
                {this.state.betInfo.meta.awayTeam.name} or draw
              </button>

              <br />
              <p>
                By creating an account you agree to our{" "}
                <a href="/betterSportsTerms">Terms & Privacy</a>.
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

export default connect(mapStateToProps)(BetsForm);
