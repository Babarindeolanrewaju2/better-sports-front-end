import React from "react";

//import BetButton from "./BetButton";

const SoccerTeamCard = props => {
  let team = props.team.attributes;
  return (
    <div className="SoccerTeamCard">
      <img src={team.team_logo} />
    </div>
  );
};

export default SoccerTeamCard;
