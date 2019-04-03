import React, { Component } from "react";

// connect to Redux state
import { connect } from "react-redux";
// abstracted PATCH to increase a user balance
import { increaseBalance } from "../../actions/balanceActions";

// styling
import "../../styles/AddFunds.css";

class IncreaseBalance extends Component {
  state = {
    // the amount to increase the balance is initialized at zero
    amount: 0
  };

  // when a user selects an ammount, this callback changes
  // the value of amount in state
  handleAmountChange = event => {
    if (event.target.value <= 5000) {
      this.setState({ amount: parseInt(event.target.value) });
    } else {
      alert("A maximum of $5000 may be added at one time.");
    }
  };

  // when a user submits the form this event callback is invoked
  handleSubmit = event => {
    // prevent refresh of the page
    event.preventDefault();

    // as long as the initial value of state has been changed,
    // allow the user to submit a PATCH to change the value
    if (this.state.amount > 0) {
      // find the first account id
      // TODO: in the future this will want to change as you give the user
      // the option to add various accounts
      const acctId = this.props.user.accounts[0].id;

      // grab amount in state
      const amt = this.state.amount;

      // grab the token given to the user for verification purposes on the backend
      // only if a valid token is present will a user be able to alter the value
      // of their account
      const token = localStorage.getItem("token");

      // use the abstracted method to increaseBalance
      this.props.addFunds(acctId, amt, token);

      // move the user to their dashboard
      this.props.history.push("/dashboard");
    } else {
      // handle the case where a user hits submit before they have changed
      // the value of amount in state
      alert("Please select an amount to add to your account.");
    }
  };

  render() {
    // if there is a user logged in, then render the apporopriate HTML
    if (this.props.user) {
      return (
        <div className="addFundsContainer">
          {/* div to hold the form to change amount value */}
          <div className="addFundsForm">
            {/* description of what to do with this form */}
            <h1>{this.props.user.first_name}, add funds to your account:</h1>
            <h3>
              Select an amount below to debit funds from your bank and add to
              your Better Sports account. Please note: a maximum of $5000 may be
              added at one time.
            </h3>
            <form id="addFunds" onSubmit={this.handleSubmit}>
              {/* button to add $50 to account */}
              <button
                type="button"
                value="50"
                name="add50"
                onClick={this.handleAmountChange}
              >
                $50
              </button>
              {/* button to add $100 to account */}
              <button
                type="button"
                value="100"
                name="add100"
                onClick={this.handleAmountChange}
              >
                $100
              </button>
              {/* button to add $250 to account */}
              <button
                type="button"
                value="250"
                name="add250"
                onClick={this.handleAmountChange}
              >
                $250
              </button>
              {/* button to add $500 to account */}
              <button
                type="button"
                value="500"
                name="add500"
                onClick={this.handleAmountChange}
              >
                $500
              </button>
              {/* input to add any amount user selects to account */}
              <label>$</label>
              <input
                type="text"
                name="addValue"
                placeholder="Enter Amount"
                onChange={this.handleAmountChange}
              />
              <br />
              {/* submit button that dynamically renders account amount to */}
              {/*increase their account */}
              <input
                type="submit"
                value={`Add $${this.state.amount || 0} to account`}
              />
            </form>
          </div>
        </div>
      );
    } else {
      // render in the event a user is slow to return
      return <h1>Loading...</h1>;
    }
  }
}

// add user to props by retrieving from Redux state
const mapStateToProps = state => {
  return { user: state.currentUser.attributes };
};

// add increaseBalance to props
const mapDispatchToProps = dispatch => {
  return {
    addFunds: (acctId, amt, token) => {
      increaseBalance(dispatch, acctId, amt, token);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncreaseBalance);
