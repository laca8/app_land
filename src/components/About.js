import React from "react";

const About = (props) => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          lorem The href attribute requires a valid value to be accessible.
          Provide a valid, navigable address as the href value. If you cannot
          provide a valid href, but still need the element
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
};

export default About;
