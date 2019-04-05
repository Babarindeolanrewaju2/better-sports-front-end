import React from "react";

// MyBets shows the bets a user has made in an HTML table format
import MyBets from "../Bets/MyBets";

const DashBets = props => {
  //will return all of a users bets, past and present
  if (props.user.attributes !== undefined) {
    // TODO: MAKE SURE BETS ARE SORTED, and return the bets in order of closest date

    // only grab a max of 9 bets so that displays well on the dashboard
    const limitBets = props.user.attributes.bets.slice(0, 9);

    return (
      <div className="dashBets">
        <button className="button" onClick={() => props.history.push("/bets")}>
          See all bets
        </button>
        {/* Only based the 9 bets to the componet, for display purpose */}
        <MyBets limitBets={limitBets} />
      </div>
    );
  } else {
    return null;
  }
};

export default DashBets;
