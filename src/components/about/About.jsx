import React from "react";
import me from "../../pics/man.png";
import { FaAward } from "react-icons/fa";
import "./about.css";
const About = () => {
  return (
    <div id="about" className="about">
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="icon" />
              <h5> Software Engineer</h5>
              <small>1.3+ years</small>
            </article>{" "}
            <article className="about__card">
              <FaAward className="icon" />
              <h5>Front-End Developer </h5>
              <small>1+ years</small>
            </article>{" "}
            
          </div>
          <p>
            Highly accomplished and user-focused Front-end Developer adept in
            collaborating with UX and design teams to plan the technical writing
            and execution of functional specifications for websites and
            applications. Experienced in building multi-platform websites using
            Responsive Web Design/RWD.{" "}
          </p>
          <a href="#contacts" className="btns">Lets's talk</a>
        </div>
      </div>
    </div>
  );
};

export default About;
