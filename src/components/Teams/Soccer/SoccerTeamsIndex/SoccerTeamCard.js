import React from "react";

const SoccerTeamCard = props => {
  // grab team attributes from props
  let team = props.team.attributes;

  // on user click, push to that team's show page based on team id
  const handleClick = () => {
    props.routerProps.history.push(`/teams/soccer/${team.id}`);
  };

  // the front of the card will have the team image on it
  // the back of the card will display team name and league information
  // this is show on the teams index page
  return (
    <div className="soccerTeamCard" onClick={handleClick}>
      <div className="soccer-card-inner">
        <div className="soccer-card-front">
          <img src={team.team_logo} alt="Avatar" />
        </div>
        <div className="soccer-card-back">
          <h1>{team.name}</h1>
          <h3>{team.league}</h3>
        </div>
      </div>
    </div>
  );
};

export default SoccerTeamCard;
