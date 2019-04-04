// route to verify the the users token in localStorage and auto sign them in
const AUTO_LOGIN = "http://localhost:8000/api/v1/auto_login";
// route to create new account
const CREATE_ACCT = "http://localhost:8000/api/v1/signup";
// route to fetch all games that can currently be bet on
const GAMES_API = "http://localhost:8000/api/v1/games";
// route to login user, and return a token from the back end
const LOGIN_USER = "http://localhost:8000/api/v1/login";

// fetches all games from API and updates state to include them
// this function is used in App.js
export function fetchGames(dispatch) {
  return fetch(GAMES_API)
    .then(res => res.json())
    .then(games => {
      // Sort by date before sending to redux state
      let sortedGames = games["data"].sort(function(a, b) {
        if (a.attributes.match_date > b.attributes.match_date) {
          return 1;
        } else if (a.attributes.match_date < b.attributes.match_date) {
          return -1;
        }
        return 0;
      });

      return dispatch({ type: "UPDATE_GAMES", payload: sortedGames });
    });
}

// allows user to login with email and password and returns
// user object and token to store in state/browser
// Used in LoginSignup/Login component
export function login(dispatch, email, pwd, callback) {
  return fetch(LOGIN_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      email: email, // pass email and pwd to the back-end
      password: pwd
    })
  })
    .then(res => res.json())
    .then(user => {
      if (user.errors) {
        // if there are any errors, alert the user to said error
        alert(user.errors);
      } else {
        // set token to browser localStorage
        localStorage.setItem("token", user.token);

        // set token in Redux state
        dispatch({
          type: "USER_TOKEN",
          payload: user.token
        });

        // set user info in Redux state
        dispatch({
          type: "CURRENT_USER",
          payload: user["user"]["data"]
        });

        // if the callback exists, invoke it
        // this will push to the next page - '/dashboard'
        callback && callback();
      }
    });
}

// allows a new user to sign up for an account and returns
// user object and token to store in state/browser
// Used in LoginSignup/Signup component
export function signup(dispatch, firstname, lastname, email, pwd, callback) {
  return fetch(CREATE_ACCT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      first_name: firstname, // pass information to the back-end to create an account
      last_name: lastname,
      email: email,
      password: pwd
    })
  })
    .then(res => res.json())
    .then(newUser => {
      if (newUser.errors) {
        // if there are any errors, alert the user to said errors
        alert(newUser.errors);
      } else {
        // set token to browser localStorage
        localStorage.setItem("token", newUser.token);

        // set token in Redux state
        dispatch({
          type: "USER_TOKEN",
          payload: newUser.token
        });

        // set user info in Redux state
        dispatch({
          type: "CURRENT_USER",
          payload: newUser["user"]["data"]
        });

        // if the callback exists, invoke it
        // this will push to the next page - '/dashboard'
        callback && callback();
      }
    });
}

// auto logs in a user that has a token in localStorage
// this function is used in App.js
export function auto_login(dispatch, token) {
  return fetch(AUTO_LOGIN, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: "USER_TOKEN",
        payload: token
      });
      dispatch({ type: "CURRENT_USER", payload: user["data"] });
    });
}
