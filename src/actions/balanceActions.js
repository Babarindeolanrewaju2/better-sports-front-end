const ADD_TO_BALANCE = "http://localhost:8000/api/v1/accounts/";

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
      //console.log(user["data"]);
      return dispatch({
        type: "CURRENT_USER",
        payload: user["data"]
      });
    });
}
