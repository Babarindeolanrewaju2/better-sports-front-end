const MAKE_NEW_BET = "http://localhost:8000/api/v1/bets";

export function disptachBet(dispatch, betInfo) {
  return dispatch({ type: "BET_INFO", payload: betInfo });
}

export function makeBet(dispatch, token, amt, odds, game) {
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
        game: game
      }
    })
  })
    .then(resp => resp.json())
    .then(user => {
      //console.log(user["data"]);
      return dispatch({
        type: "CURRENT_USER",
        payload: user["data"]
      });
    });
}
