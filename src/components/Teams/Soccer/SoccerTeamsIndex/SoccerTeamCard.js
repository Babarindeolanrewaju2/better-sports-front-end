import React from "react";

//import { connect } from "react-redux";

const SoccerTeamCard = props => {
  let team = props.team.attributes;
  const handleClick = () => {
    props.routerProps.history.push(`/teams/soccer/${team.id}`);
  };
  return (
    <div className="SoccerTeamCard" onClick={handleClick}>
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
