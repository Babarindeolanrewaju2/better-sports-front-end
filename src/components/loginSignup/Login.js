import React from "react";

import "../../styles/Login.css";

const Signup = () => {
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <form>
          <h1>Login</h1>
          <p>Please fill in this form to login.</p>
          <hr />
          <br />
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <br />
          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <br />

          <div class="clearfix">
            <button type="submit" className="loginbtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
