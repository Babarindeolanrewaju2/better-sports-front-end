import React from "react";

import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepageImg">
        <img
          className="homeBackground"
          src="http://localhost:3000/images/homepage_stadium.jpg"
          alt="Soccer Stadium Photographer: Tom Grimbert, opensource copyright - care of Unsplash"
        />
      </div>
      <p className="homeText">
        Bet on the Champions League, and become your own champion!
      </p>
    </div>
  );
};

export default Homepage;
