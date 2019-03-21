import React from "react";

import MyBets from "../Bets/MyBets";

const DashBets = props => {
  //will return all of a users bets, past and present
  if (props.user.attributes !== undefined) {
    const limitBets = props.user.attributes.bets.slice(0, 9);

    return (
      <div className="dashBets">
        <a href="/bets" className="button" role="button">
          See all bets
        </a>
        <MyBets limitBets={limitBets} />
      </div>
    );
  } else {
    return null;
  }
  //
};

export default DashBets;
