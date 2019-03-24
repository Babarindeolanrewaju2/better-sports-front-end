const TEAMS_API = "http://localhost:8000/api/v1/teams";
const TEAM_PLAYERS = "http://localhost:8000/api/v1/team_players";

// fetches all soccer teams from API and updates state to include them
export function fetchTeams(dispatch) {
  return fetch(TEAMS_API)
    .then(res => res.json())
    .then(teams => {
      return dispatch({ type: "UPDATE_TEAMS", payload: teams["data"] });
    });
}

//
export function fetchTeamPlayers(team_id) {
  return fetch(TEAM_PLAYERS, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      teamId: team_id
    }
  }).then(res => res.json());
}
