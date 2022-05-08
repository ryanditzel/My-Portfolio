import React from "react";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-wrap">
        <div className="landing-left">
          <div className="landing-welcome">
            <h2>
              Hello, I'm Ryan. <br />I create things for the internet.
            </h2>
          </div>
        </div>
        <div className="projects-landing">
          <div id="project1">Project 1</div>
          <div id="project2">Project 2</div>
          <div id="project3">Project 3</div>
          <div id="project4">Project 4</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
