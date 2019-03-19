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
  return (
    <div className="signupContainer">
      <div className="signupForm">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="firstname">
            <b>First name</b>
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            name="firstname"
            required
          />

          <br />
          <label htmlFor="lastname">
            <b>Last name</b>
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            name="lastname"
            required
          />

          <br />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <br />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <br />
          <label htmlFor="password confirmation">
            <b>Password Confirmation</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirmation"
            required
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="/betterSportsTerms">Terms & Privacy</a>.
          </p>

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    game: state.betInfo
  };
};

export default BetsForm;
