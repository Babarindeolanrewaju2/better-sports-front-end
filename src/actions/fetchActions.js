const GAMES_API = "http://localhost:8000/api/v1/games";
//const TEAMS_API = "http://localhost:8000/api/v1/teams";

export function fetchGames(dispatch) {
  return fetch(GAMES_API)
    .then(res => res.json())
    .then(games => {
      return dispatch({ type: "UPDATE_GAMES", payload: games["data"] });
    });
}

// export function fetchTeams(dispatch) {
//   return fetch(TEAMS_API)
//     .then(res => res.json())
//     .then(teams => {
//       return dispatch({ type: "UPDATE_TEAMS", payload: teams["data"] });
//     });
// }
