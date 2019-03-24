import React from "react";

const PlayerThumbnail = props => {
  // grab team attributes from props
  let player = props.player.attributes;

  // on user click, push to that team's show page based on team id
  const handleClick = () => {
    //props.routerProps.history.push(`/teams/soccer/${team.id}`);
    console.log("player clicked");
  };

  return (
    <div className="playerCard" onClick={handleClick}>
      <div className="player-card-inner">
        <div className="player-card-front">
          <img src={player.profile_image} alt="Player Card" />
        </div>
        <div className="player-card-back">
          <h1>{player.full_name}</h1>
          <h3>Position: {player.position}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlayerThumbnail;
