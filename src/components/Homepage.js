import React from "react";

// styling
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepageImg">
        {/* Hompage Image */}
        <img
          className="homeBackground"
          src="http://localhost:3000/images/homepage_stadium.jpg"
          alt="Soccer Stadium Photographer: Tom Grimbert, opensource copyright - care of Unsplash"
        />
      </div>
      {/* homepage text */}
      <p className="homeText">
        Bet on the Champions League, and become your own champion!
      </p>
    </div>
  );
};

export default Homepage;
