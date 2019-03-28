const MAKE_NEW_BET = "http://localhost:8000/api/v1/bets";

// used by Games/BetButton component
export function disptachBet(dispatch, betInfo) {
  return dispatch({ type: "BET_INFO", payload: betInfo });
}

// used by Bets/BetsForm component
// requires dispatch, user token, wager amount, odds for the particular
// bet selected, the game id, and the type of bet (e.g. 'Home Win', 'Away Win', 'Draw', etc.)
export function makeBet(dispatch, token, amt, odds, gameID, betType) {
  return fetch(MAKE_NEW_BET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token
    },
    body: JSON.stringify({
      bet: {
        amount: amt,
        odds: odds,
        game: gameID,
        betType: betType
      }
    })
  })
    .then(resp => resp.json())
    .then(user => {
      // update user with the new user object returned from the back end
      return dispatch({
        type: "CURRENT_USER",
        payload: user["data"]
      });
    });
}
