import React from "react";

import MyBets from "../Bets/MyBets";

const DashBets = props => {
  //will return all of a users bets, past and present
  return (
    <div className="dashBets">
      <MyBets />
    </div>
  );
};

export default DashBets;
