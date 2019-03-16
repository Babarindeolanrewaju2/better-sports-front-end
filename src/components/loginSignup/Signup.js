import React from "react";

import "../../styles/Signup.css";

const Signup = () => {
  return (
    <div className="signupContainer">
      <div className="signupForm">
        <form>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
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
          <label for="password confirmation">
            <b>Password Confirmation</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password confirmation"
            required
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <div class="clearfix">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <button type="submit" class="signupbtn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
