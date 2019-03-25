import React, { Fragment } from "react";

const TeamStadium = props => {
  // grab team attributes from props
  let team = props.team.attributes;

  return (
    <Fragment>
      <div className="teamShowStadiumImage">
        <p>{team.description}</p>
      </div>

      <div className="teamShowStadiumName">
        <h2>{team.attributes.name} Players:</h2>
      </div>

      <div className="teamShowStadiumDetails">
        {this.mapPlayersToPlayerThumb()}
      </div>
    </Fragment>
  );
};

export default TeamStadium;
