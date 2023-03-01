import React from "react";
import { GoHome } from "react-icons/go";
import { FaUserSecret } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import './nav.css'
import { useState } from "react";
const Nav = () => {
  const[activeNav,setActiveNav]=useState("#header")
  return (
    <nav>
        <a href="#header" onClick={()=>setActiveNav('#header')} className={activeNav==='#header'? 'active':' '}>
          <GoHome />
        </a>
        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active':' '}>
          <FaUserSecret />
        </a>
        <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active':' '}>
          <GiBrain />
        </a>
        <a href="#project" onClick={()=>setActiveNav('#project')} className={activeNav==='#project'? 'active':' '}>
          <FaLaptopCode />
        </a>
        <a href="#contacts" onClick={()=>setActiveNav('#contacts')} className={activeNav==='#contacts'? 'active':' '}>
          <TiMessageTyping />
        </a>
        
      </nav>
  );
};

export default Nav;
