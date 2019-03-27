import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SocialMedia = props => {
  // grab team attributes from props
  let team = props.team.attributes;

  return (
    <Fragment>
      <ul>
        {team.website && (
          <li className="socialLink">
            <a
              target="_blank"
              href={
                team.website.includes("www")
                  ? "//" + team.website
                  : "//www." + team.website
              }
            >
              <i class="fas fa-globe-americas" />
            </a>
          </li>
        )}

        {team.facebook && (
          <li className="socialLink">
            <a
              target="_blank"
              href={
                team.facebook.includes("www")
                  ? "//" + team.facebook
                  : "//www." + team.facebook
              }
            >
              <i class="fab fa-facebook" />
            </a>
          </li>
        )}

        {team.instagram && (
          <li className="socialLink">
            <a
              target="_blank"
              href={
                team.instagram.includes("www")
                  ? "//" + team.instagram
                  : "//www." + team.instagram
              }
            >
              <i class="fab fa-instagram" />
            </a>
          </li>
        )}

        {team.twitter && (
          <li className="socialLink">
            <a
              target="_blank"
              href={
                team.twitter.includes("www")
                  ? "//" + team.twitter
                  : "//www." + team.twitter
              }
            >
              <i class="fab fa-twitter-square" />
            </a>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default SocialMedia;
