import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch Your App</span> With Confidenece A nd Creativety
        </h1>
        <p className="details">
          lorem ipsum dolor site amet conseccteur adipisicing elit magnai
          blanwidth
        </p>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
};

export default Header;
