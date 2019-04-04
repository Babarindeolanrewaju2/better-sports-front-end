// set default Redux state
const initialState = {
  games: [],
  bets: [],
  teams: [],
  players: [],
  selectedPlayer: {},
  currentUser: {},
  token: null,
  betInfo: {}
};

// reducer with cases for Redux
function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_GAMES":
      return { ...state, games: action.payload };
    case "UPDATE_TEAMS":
      return { ...state, teams: action.payload };
    case "UPDATE_PLAYERS":
      return { ...state, players: action.payload };
    case "SELECTED_PLAYER":
      return { ...state, selectedPlayer: action.payload };
    case "CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "USER_TOKEN":
      return { ...state, token: action.payload };

    case "BET_INFO":
      return { ...state, betInfo: action.payload };
    default:
      return state;
  }
}

export default reducer;
