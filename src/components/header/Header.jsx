import React from "react";
import Cta from './Cta'
import Social from '../header/Socials'
import './header.css'
import ME from "../../pics/manoj.jpg"
import {RxDoubleArrowDown} from 'react-icons/rx'
import {GiRocketFlight} from 'react-icons/gi'

const Header = () => {
  return(
<header id="header">
<div className="container header__container">
    <h1>A.Manoj
    <span><GiRocketFlight/></span></h1>
    <h5 className="text-light">Front-End Developer</h5>
    
    < Cta/>
    
    <Social/>
    <div className="me">
        <img src={ME} alt="my pic" />
      </div>
      <a href="#contacts" className="scroll" ><RxDoubleArrowDown/></a>
</div>
</header>
  )
};

export default Header;
