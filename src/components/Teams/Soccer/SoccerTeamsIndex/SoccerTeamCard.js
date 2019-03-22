import React from "react";

//import BetButton from "./BetButton";

const SoccerTeamCard = props => {
  let team = props.team.attributes;
  return (
    <div className="SoccerTeamCard">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={team.team_logo} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>{team.name}</h1>
          <h3>{team.league}</h3>
        </div>
      </div>
    </div>
  );
};

export default SoccerTeamCard;
