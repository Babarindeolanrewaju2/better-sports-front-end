// fetch all team information from the API
const TEAMS_API = "http://localhost:8000/api/v1/teams";
// fetch to the teams controller and request players for a team
// based on the route id
const TEAM_PLAYERS = "http://localhost:8000/api/v1/team_players";
// get an individual players information based on their id
const PLAYER = "http://localhost:8000/api/v1/players/";

// fetches all soccer teams from API and updates Redux state to include them
// used in Teams/Soccer/SoccerTeamsIndex
export function fetchTeams(dispatch) {
  return fetch(TEAMS_API)
    .then(res => res.json())
    .then(teams => {
      return dispatch({ type: "UPDATE_TEAMS", payload: teams["data"] });
    });
}

// Hits the API endpoint to fetch all players for a particular team based on
// on that team ID.
// This function is used in the SoccerTeamShow component
export function fetchTeamPlayers(team_id) {
  return fetch(TEAM_PLAYERS, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      teamId: team_id
    }
  }).then(res => res.json());
}

// Looks up a specific player from the API based on the players ID
// This function is used in the PlayerShowPage component
export function fetchPlayerInfo(player_id) {
  return fetch(PLAYER + player_id, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      playerId: player_id
    }
  }).then(res => res.json());
}
