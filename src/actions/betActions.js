const MAKE_NEW_BET = "http://localhost:8000/api/v1/bets";

// used by BetButton
export function disptachBet(dispatch, betInfo) {
  return dispatch({ type: "BET_INFO", payload: betInfo });
}

// used by BetsForm
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
      console.log(user["data"]);
      return dispatch({
        type: "CURRENT_USER",
        payload: user["data"]
      });
    });
}
