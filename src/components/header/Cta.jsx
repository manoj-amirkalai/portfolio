import React from "react";
import CV from "../../pics/cv.pdf";

const Cta = () => {
  return (
    <>
      <div className="cta">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <a href="#contacts" className="btn btn-primary btn-primarys">
          Let's talk
        </a>
      </div>
    </>
  );
};

export default Cta;
