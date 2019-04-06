import React, { Fragment } from "react";

const SocialMedia = props => {
  // grab team attributes from props
  let team = props.team.attributes;

  return (
    <Fragment>
      <ul>
        {/* if the team has a website in the database return this icon
          and make it a link */}
        {team.website && (
          <li className="socialLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                team.website.includes("www")
                  ? "//" + team.website
                  : "//www." + team.website
              }
            >
              <i className="fas fa-globe-americas" />
            </a>
          </li>
        )}

        {/* if the team has a facebook in the database return this icon
          and make it a link */}
        {team.facebook && (
          <li className="socialLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                team.facebook.includes("www")
                  ? "//" + team.facebook
                  : "//www." + team.facebook
              }
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
        )}

        {/* if the team has a instagram in the database return this icon
          and make it a link */}
        {team.instagram && (
          <li className="socialLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                team.instagram.includes("www")
                  ? "//" + team.instagram
                  : "//www." + team.instagram
              }
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        )}

        {/* if the team has a twitter in the database return this icon
          and make it a link */}
        {team.twitter && (
          <li className="socialLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                team.twitter.includes("www")
                  ? "//" + team.twitter
                  : "//www." + team.twitter
              }
            >
              <i className="fab fa-twitter-square" />
            </a>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default SocialMedia;
