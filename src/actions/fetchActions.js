const GAMES_API = "http://localhost:8000/api/v1/games";
const CREATE_ACCT = "http://localhost:8000/api/v1/signup";
//const TEAMS_API = "http://localhost:8000/api/v1/teams";

export function fetchGames(dispatch) {
  return fetch(GAMES_API)
    .then(res => res.json())
    .then(games => {
      return dispatch({ type: "UPDATE_GAMES", payload: games["data"] });
    });
}

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
      return dispatch({ type: "CURRENT_USER", payload: newUser["data"] });
      // TODO:  PUSH TO Dashboard here
    });
}

// export function fetchTeams(dispatch) {
//   return fetch(TEAMS_API)
//     .then(res => res.json())
//     .then(teams => {
//       return dispatch({ type: "UPDATE_TEAMS", payload: teams["data"] });
//     });
// }
