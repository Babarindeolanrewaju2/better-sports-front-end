import React from "react";

import { connect } from "react-redux";
import { login } from "../../actions/fetchActions";

import "../../styles/Login.css";

const Login = props => {
  // on submition of login form...
  function handleSubmit(event) {
    // prevent default form action
    event.preventDefault();
    // grab necessary form data
    let email = event.target.email.value;
    let pwd = event.target.password.value;

    // used login method to verify user in DB and return token or error
    console.log(props);
    props.login(email, pwd);

    // clear form of current data
    document.getElementById("login").reset();
    //props.history.push("/teams/soccer");
    props.history.push("/dashboard");
  }

  // display form HTML
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <form id="login" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p>Please fill in this form to login.</p>
          <hr />
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

          <div className="clearfix">
            <button type="submit" className="loginbtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// add login method as prop - this does a POST to /login of API and verifies user
function mapDispatchToProps(dispatch) {
  return {
    login: (email, pwd, callback) => login(dispatch, email, pwd, callback)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
