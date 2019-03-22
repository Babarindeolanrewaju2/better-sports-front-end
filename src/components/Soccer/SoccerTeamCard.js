import React from "react";

//import BetButton from "./BetButton";

const SoccerTeamCard = props => {
  let team = props.team.attributes;
  return (
    <div className="SoccerTeamCard">
      <h1>{team.name}</h1>
    </div>
  );
};

export default SoccerTeamCard;
