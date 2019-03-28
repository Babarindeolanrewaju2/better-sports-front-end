import React from "react";

const PlayerThumbnail = props => {
  // grab team attributes from props
  let player = props.player.attributes;

  // on user click, push to that team's show page based on team id
  const handleClick = () => {
    // push to the player's dynamic route when user clicks on their image/card
    props.history.push(`/teams/soccer/players/${props.player.id}`);
  };

  return (
    <div className="playerCard" onClick={handleClick}>
      <div className="player-card-inner">
        <div className="player-card-front">
          {/* player's image or stock picture of soccer ball */}
          <img
            src={
              player.profile_image ||
              "http://clipart-library.com/images/BcaKKaXLi.png"
            }
            alt="Player Card"
          />
        </div>

        {/* basic player information for the back of the player card */}
        <div className="player-card-back">
          <h1>{player.full_name}</h1>
          <h3>Position: {player.position}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlayerThumbnail;
