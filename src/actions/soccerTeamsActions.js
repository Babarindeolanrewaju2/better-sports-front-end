const TEAMS_API = "http://localhost:8000/api/v1/teams";

// fetches all soccer teams from API and updates state to include them
export function fetchTeams(dispatch) {
  return fetch(TEAMS_API)
    .then(res => res.json())
    .then(teams => {
      return dispatch({ type: "UPDATE_TEAMS", payload: teams["data"] });
    });
}
