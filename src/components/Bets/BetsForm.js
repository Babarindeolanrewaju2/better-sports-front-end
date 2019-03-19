import React from "react";

import { connect } from "react-redux";
//import { signup } from "../../actions/fetchActions";

import "../../styles/Signup.css";

const BetsForm = props => {
  const handleSubmit = () => {
    console.log("submitted");
  };
  console.log("BETSFORM", props);
  // return signup form HTML
  if (props.betInfo !== {}) {
    return (
      <div className="signupContainer">
        <div className="signupForm">
          <form onSubmit={handleSubmit}>
            <h1>Make A Bet</h1>
            <p>
              Please select your wager amount and the outcome you are betting
              on.
            </p>
            <hr />
            <button type="button" value="50" name="add50">
              $50
            </button>
            <button type="button" value="100" name="add100">
              $100
            </button>
            <button type="button" value="250" name="add250">
              $250
            </button>
            <button type="button" value="500" name="add500">
              $500
            </button>
            <label>$</label>
            <input type="text" name="addValue" placeholder="Enter Amount" />
            <br />
            <br />
            <input type="checkbox" name="homeWin" value="Bike" />{" "}
            {props.betInfo.meta.homeTeam.name} win
            <br />
            <input type="checkbox" name="draw" value="Car" /> Draw
            <br />
            <input type="checkbox" name="awayWin" value="Bike" />{" "}
            {props.betInfo.meta.awayTeam.name} win
            <br />
            <input type="checkbox" name="homeDraw" value="Bike" />{" "}
            {props.betInfo.meta.homeTeam.name} or draw
            <br />
            <input type="checkbox" name="awayDraw" value="Bike" />{" "}
            {props.betInfo.meta.awayTeam.name} or draw
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
};

const mapStateToProps = state => {
  return {
    betInfo: state.betInfo
  };
};

export default connect(mapStateToProps)(BetsForm);
