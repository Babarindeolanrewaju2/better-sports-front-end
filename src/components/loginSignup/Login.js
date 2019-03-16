import React from "react";

import "../../styles/Login.css";

const Login = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("email", event.target.email.value);
    console.log("pwd", event.target.password.value);
  }

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
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

export default Login;
