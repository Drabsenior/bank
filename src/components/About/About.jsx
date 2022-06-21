import React from "react";
import "./About.css";
import party1 from "./../../assets/images/party1.svg";
const About = () => {
  return (
    <div className="Aboutwrapper" id="about">
      <div className="aboutcontainer">
        <div className="leftAbout">
          <div className="aboutheading">
            <span>About us</span>
          </div>
          <div className="aboutdescription">
            <span>The half of 2022 has offered up a dazzling number</span>
          </div>
          <div className="aboutbtn">
            <button>Read More</button>
          </div>
        </div>
        <div className="rightAbout">
          <div className="aboutsvg">
            <img src={party1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
