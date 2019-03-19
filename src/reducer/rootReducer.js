const initialState = {
  games: [],
  bets: [],
  teams: [],
  players: [],
  currentUser: { attributes: { accounts: [0] } },
  betInfo: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_GAMES":
      return { ...state, games: action.payload };
    case "UPDATE_TEAMS":
      return { ...state, teams: action.payload };
    case "CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "BET_INFO":
      return { ...state, betInfo: action.payload };
    default:
      return state;
  }
}

export default reducer;
