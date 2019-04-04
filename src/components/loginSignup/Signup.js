import React from "react";

// connect to Redux state
import { connect } from "react-redux";
import { signup } from "../../actions/fetchActions";

import "../../styles/Signup.css";

const Signup = props => {
  // event to hand submition of signup form
  function handleSubmit(event) {
    // prevent default form action
    event.preventDefault();
    // grab all form field data
    let firstname = event.target.firstname.value;
    let lastname = event.target.lastname.value;
    let email = event.target.email.value;
    let pwd = event.target.password.value;
    let pwdConfirm = event.target.passwordConfirmation.value;

    // if password and password confirmation match send data to API /signup
    // form fields are all required, and assure data will be present
    // database requires a unique email
    if (pwd === pwdConfirm) {
      props.signup(firstname, lastname, email, pwd, () => {
        props.history.push("/dashboard");
      });
    } else
      alert(
        "Please make sure your password confirmation matches your password."
      );
  }

  // return signup form HTML
  return (
    <div className="signupContainer">
      <div className="signupForm">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          {/* Input fields for user to sign up with */}
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
            {/* upon click, the cancel btn pushes to the homepage */}
            <button
              type="button"
              className="cancelSignup"
              onClick={() => {
                props.history.push("/");
              }}
            >
              Cancel
            </button>
            {/* onSubmit is on the form, and POSTs to the back end to create
              a user and to return a token */}
            <button type="submit" className="signUpBtn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// add signup function to props - this functions posts to the /signup endpoint of
// the API and creates a new user if email is unique
function mapDispatchToProps(dispatch) {
  return {
    signup: (firstname, lastname, email, pwd, callback) =>
      signup(dispatch, firstname, lastname, email, pwd, callback)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Signup);
