import React, { Component } from "react";
import { connect } from "react-redux";

import { increaseBalance } from "../../actions/balanceActions";

import "../../styles/AddFunds.css";

class IncreaseBalance extends Component {
  state = {
    amount: 0
  };

  handleAmountChange = event => {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
    this.setState({ amount: parseInt(event.target.value) });
  };

  handleSubmit = event => {
    event.preventDefault();
    const acctId = this.props.user.accounts[0].id;
    const amt = this.state.amount;
    const token = localStorage.getItem("token");
    this.props.addFunds(acctId, amt, token);
    this.props.history.push("/dashboard");
  };

  render() {
    if (this.props.user) {
      console.log(this.props.user);
      return (
        <div className="addFundsContainer">
          <div className="addFundsForm">
            <h1>{this.props.user.first_name}, add funds to your account:</h1>
            <h3>
              Select an amount below to debit funds from your bank and add to
              your Better Sports account.
            </h3>
            <form id="addFunds" onSubmit={this.handleSubmit}>
              <button
                type="button"
                value="50"
                name="add50"
                onClick={this.handleAmountChange}
              >
                $50
              </button>
              <button
                type="button"
                value="100"
                name="add100"
                onClick={this.handleAmountChange}
              >
                $100
              </button>
              <button
                type="button"
                value="250"
                name="add250"
                onClick={this.handleAmountChange}
              >
                $250
              </button>
              <button
                type="button"
                value="500"
                name="add500"
                onClick={this.handleAmountChange}
              >
                $500
              </button>
              <label>$</label>
              <input
                type="text"
                name="addValue"
                placeholder="Enter Amount"
                onChange={this.handleAmountChange}
              />
              <br />
              <input
                type="submit"
                value={`Add $${this.state.amount} to account`}
              />
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
  return { user: state.currentUser.attributes };
};

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
