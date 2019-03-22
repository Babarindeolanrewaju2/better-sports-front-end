const TEAMS_API = "http://localhost:8000/api/v1/teams";

// fetches all soccer teams from API and updates state to include them
export function fetchTeams(dispatch) {
  return fetch(TEAMS_API)
    .then(res => res.json())
    .then(teams => {
      return dispatch({ type: "UPDATE_TEAMS", payload: teams["data"] });
    });
}

// setSelectedTeam is called on the Teams Index page when a user selects a team to
// click through to the team show page

export function setSelectedTeam(dispatch, team) {
  return dispatch({ type: "SELECTED_TEAM", payload: team });
}

export function setSelectedPlayer(dispatch, player) {
  return dispatch({ type: "SELECTED_PLAYER", payload: player });
}
