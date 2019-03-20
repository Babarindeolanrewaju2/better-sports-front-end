import React from "react";

import MyBets from "../Bets/MyBets";

const DashBets = props => {
  //will return all of a users bets, past and present
  return (
    <div className="dashBets">
      <a href="/bets" className="button" role="button">
        See all bets
      </a>
      <MyBets />
    </div>
  );
};

export default DashBets;
