import React, { Fragment } from "react";

const TeamDetails = props => {
  // grab team attributes from props
  let team = props.team.attributes;

  return (
    <Fragment>
      <div className="teamBio">
        {/* display team image */}
        <div className="teamImage">
          <img src={team.team_logo} alt="team logo" />
        </div>

        {/* Primary team information  */}
        <div className="teamDetails">
          <h1>{team.name}</h1>
          <h3>{team.stadium_location}</h3>
          <h3>{team.league}</h3>
          <h3>{team.manager && `Manager: ${team.manager}`}</h3>
        </div>
      </div>

      {/* Description of team
        TODO make this a component that only shows partial text
        and on click can expand to show all text
      */}
      <div className="teamDescription">
        <p>{team.description}</p>
      </div>
    </Fragment>
  );
};

export default TeamDetails;
