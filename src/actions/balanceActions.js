const ADD_TO_BALANCE = "http://localhost:8000/api/v1/accounts/";

// Allows a user to increase their available balance to bet with.
// This is used in the Bets/BetForm component

// requires dispatch, user id, amount to add to account
// and the user's token to verify they are logged in
export function increaseBalance(dispatch, id, amt, token) {
  return fetch(ADD_TO_BALANCE + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token
    },
    body: JSON.stringify({
      account: {
        amount: amt
      }
    })
  })
    .then(resp => resp.json())
    .then(user => {
      // the serialized user is returned, and information is reset as currentUser
      // with the updated balance
      return dispatch({
        type: "CURRENT_USER",
        payload: user["data"]
      });
    });
}
