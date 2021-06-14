import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import "./About.css";

function About(props) {
  return (
    <div className="p-about">
      <FaInfoCircle/>
      <h2>About me</h2>
      <div className="general-info">
        <span style={{ color: "#1cb698", fontWeight: "bold" }}>
          Hello! I'm Tal.
        </span>{" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
        ornare purus. Morbi luctus tortor nunc, vitae posuere nibh malesuada
        sed. In nec tortor eu nibh tristique vehicula sed in lectus. Phasellus
        vitae accumsan tortor. Fusce ac vestibulum ante.
      </div>
      <div className="personal-details"></div>
      <div className="interests"></div>
    </div>
  );
}

export default About;
