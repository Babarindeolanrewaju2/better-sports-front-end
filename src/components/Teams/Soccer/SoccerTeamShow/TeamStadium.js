import React, { Fragment } from "react";

const TeamStadium = props => {
  // grab team attributes from props
  let team = props.team.attributes;

  return (
    <Fragment>
      <div className="teamShowStadiumHeader">
        <div className="teamShowStadiumImage">
          {/* Show team stadium image or stock image */}
          <img
            src={
              team.stadium_thumbnail ||
              "http://localhost:3000/images/standard_stadium.jpg"
            }
            alt="Stadium"
          />
        </div>

        {/* Stadium name */}
        <div className="teamShowStadiumName">
          <h2>
            Stadium: <br />
            {team.home_stadium}{" "}
          </h2>
        </div>

        {/* Show team jersey or stadium image or stock image if needed */}
        <div className="teamShowStadiumImage">
          <img
            src={
              team.team_jersey ||
              team.stadium_thumbnail ||
              "http://localhost:3000/images/standard_stadium.jpg"
            }
            alt="Stadium"
          />
        </div>
      </div>

      {/* Display stadium information */}
      <div className="teamShowStadiumDetails">
        <p>
          <span>Stadium capacity:</span>
          <br />
          {team.stadium_capacity || "Not provided"} <br /> <br />
          <span>Description:</span> <br />
          {team.stadium_description}
        </p>
      </div>
    </Fragment>
  );
};

export default TeamStadium;
