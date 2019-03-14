import React, { Fragment } from "react";

import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <Fragment>
      <div className="homepageImg">
        <img
          className="homeBackground"
          src="http://localhost:3000/images/homepage_stadium.jpg"
          alt="Soccer Stadium Photographer: Tom Grimbert, photo care of Unsplash"
        />
      </div>
      <p className="homeText">
        Your first choice of all professional gamblers for the Champions League.
      </p>
    </Fragment>
  );
};

export default Homepage;
