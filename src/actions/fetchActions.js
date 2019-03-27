const AUTO_LOGIN = "http://localhost:8000/api/v1/auto_login";
const CREATE_ACCT = "http://localhost:8000/api/v1/signup";
const GAMES_API = "http://localhost:8000/api/v1/games";
const LOGIN_USER = "http://localhost:8000/api/v1/login";

// fetches all games from API and updates state to include them
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
export function login(dispatch, email, pwd, callback) {
  console.log("callback", callback);
  return fetch(LOGIN_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: pwd
    })
  })
    .then(res => res.json())
    .then(user => {
      if (user.error || user.errors) {
        if (user.errors) {
          alert(user.errors);
        } else {
          alert(user.error);
        }
      } else {
        localStorage.setItem("token", user.token);
        console.log("LOOK HERE", user);
        dispatch({
          type: "CURRENT_USER",
          payload: user["user"]["data"]
        });
      }
    });
}

// allows a new user to sign up for an account and returns
// user object and token to store in state/browser
export function signup(dispatch, firstname, lastname, email, pwd) {
  return fetch(CREATE_ACCT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: pwd
    })
  })
    .then(res => res.json())
    .then(newUser => {
      if (newUser.error) {
        alert(newUser.error);
      } else {
        localStorage.setItem("token", newUser.token);
        return dispatch({
          type: "CURRENT_USER",
          payload: newUser["user"]["data"]
        });
        // TODO:  PUSH TO Dashboard here
      }
    });
}

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
      dispatch({ type: "CURRENT_USER", payload: user["data"] });
    });
}

// export function fetchTeams(dispatch) {
//   return fetch(TEAMS_API)
//     .then(res => res.json())
//     .then(teams => {
//       return dispatch({ type: "UPDATE_TEAMS", payload: teams["data"] });
//     });
// }
