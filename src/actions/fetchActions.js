const GAMES_API = "http://localhost:8000/api/v1/games";
const CREATE_ACCT = "http://localhost:8000/api/v1/signup";
const LOGIN_USER = "http://localhost:8000/api/v1/login";
//const TEAMS_API = "http://localhost:8000/api/v1/teams";

// fetches all games from API and updates state to include them
export function fetchGames(dispatch) {
  return fetch(GAMES_API)
    .then(res => res.json())
    .then(games => {
      // TODO: SORT BY DATE BEFORE SENDING TO STATE
      return dispatch({ type: "UPDATE_GAMES", payload: games["data"] });
    });
}

// allows user to login with email and password and returns
// user object and token to store in state/browser
export function login(dispatch, email, pwd) {
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
      if (user.error) {
        alert(user.error);
      } else {
        return dispatch({ type: "CURRENT_USER", payload: user["data"] });
        // TODO:  PUSH TO Dashboard here
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
        return dispatch({ type: "CURRENT_USER", payload: newUser["data"] });
        // TODO:  PUSH TO Dashboard here
      }
    });
}

// export function fetchTeams(dispatch) {
//   return fetch(TEAMS_API)
//     .then(res => res.json())
//     .then(teams => {
//       return dispatch({ type: "UPDATE_TEAMS", payload: teams["data"] });
//     });
// }
