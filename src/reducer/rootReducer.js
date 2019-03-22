const initialState = {
  games: [],
  bets: [],
  teams: [],
  selectedTeam: {},
  players: [],
  currentUser: {},
  betInfo: {}
};

function reducer(state = initialState, action) {
  console.log("REDUCER", action);
  switch (action.type) {
    case "UPDATE_GAMES":
      return { ...state, games: action.payload };
    case "UPDATE_TEAMS":
      return { ...state, teams: action.payload };
    case "SELECTED_TEAM":
      return { ...state, selectedTeam: action.payload };
    case "CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "BET_INFO":
      return { ...state, betInfo: action.payload };
    default:
      return state;
  }
}

export default reducer;
