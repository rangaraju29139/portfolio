import React from "react";
import "../styles/skills.css";

import javaLogo from "../assets/images/java-logo.png";
import pythonLogo from "../assets/images/python-logo.png";
import javascriptLogo from "../assets/images/javascript-logo.png";
import htmlLogo from "../assets/images/html-logo.png";
import cssLogo from "../assets/images/css-logo.png";
import bootstrapLogo from "../assets/images/bootstrap-logo.png";
import reactLogo from "../assets/images/react-logo.png";
import nodeLogo from "../assets/images/node-js-logo.png";
import expressLogo from "../assets/images/express-logo.png";
import mongodbLogo from "../assets/images/mongodb-logo.png";
import linuxLogo from "../assets/images/linux-logo.png";
import ansibleLogo from "../assets/images/ansible-logo.png";

function Skills() {
  return (
    <>
      <div className="grid-container skills-container">
        <div className="grid-item skills-item">
          <img src={javaLogo} alt="..." />
          <p className="skill-item-name">Java</p>
        </div>
        <div className="grid-item skills-item">
          <img src={pythonLogo} alt="..." />
          <p className="skill-item-name">Python</p>
        </div>
        <div className="grid-item skills-item">
          <img src={javascriptLogo} alt="..." />
          <p className="skill-item-name">Java Script</p>
        </div>
        <div className="grid-item skills-item">
          <img src={htmlLogo} alt="..." />
          <p className="skill-item-name">Html</p>
        </div>
        <div className="grid-item skills-item">
          <img src={cssLogo} alt="..." />
          <p className="skill-item-name">Css</p>
        </div>
        <div className="grid-item skills-item">
          <img src={bootstrapLogo} alt="..." />
          <p className="skill-item-name">Bootstrap</p>
        </div>
        <div className="grid-item skills-item">
          <img src={reactLogo} alt="..." />
          <p className="skill-item-name">React</p>
        </div>
        <div className="grid-item skills-item">
          <img src={nodeLogo} alt="..." />
          <p className="skill-item-name">Node js</p>
        </div>
        <div className="grid-item skills-item">
          <img src={expressLogo} alt="..." />
          <p className="skill-item-name">Express Js</p>
        </div>
        <div className="grid-item skills-item">
          <img src={mongodbLogo} alt="..." />
          <p className="skill-item-name">Mongo DB</p>
        </div>
        <div className="grid-item skills-item">
          <img src={linuxLogo} alt="..." />
          <p className="skill-item-name">Linux</p>
        </div>
        <div className="grid-item skills-item">
          <img src={ansibleLogo} alt="..." />
          <p className="skill-item-name">Ansible</p>
        </div>
      </div>
    </>
  );
}
export default Skills;
