import React from "react";
import me from '../../pics/skill.jpg'
import './experience.css'
import {FaFileCode} from 'react-icons/fa'
const Experience = () => {
  return (
    <div id="experience">
      <h2>Skills</h2>
      <div className="container skills">
        <div className="left">
          <img src={me} alt="image"/>
        </div>
        <div className="right">
          <h4 className="righth4">Languages</h4>
          <div className="code">
          <p><FaFileCode className="icons" />HTML5</p>
          <p><FaFileCode className="icons"/>CSS3</p>
          <p><FaFileCode className="icons"/>Javascript</p>
          <p><FaFileCode className="icons"/>React.js</p>
          <p><FaFileCode className="icons"/>Python</p>
          <p><FaFileCode className="icons"/>Java</p>
          <p><FaFileCode className="icons"/>C</p>
          <p><FaFileCode className="icons"/>C++</p></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
