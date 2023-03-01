import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoInstagram} from 'react-icons/io'
import {ImWhatsapp} from 'react-icons/im'
import {SiGmail} from 'react-icons/si'


const Socials = () => {
  return (
    <div className='social'>
        <a href="https://www.linkedin.com/in/manoj-amirthalingam-6a5394220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5wGv0J8%2FTHS%2FNg7QIfSlpQ%3D%3D" target="_pop"><BsLinkedin/></a>
        <a href="https://github.com/ManojAmirKalai" target="_pop"><FaGithub/></a>
        <a href="https://www.instagram.com/am__rare_one/"  target="_pop"><IoLogoInstagram/></a>
        <a href="https://wa.me/qr/CWYH77IQQSYQK1"  target="_pop"><ImWhatsapp/></a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmXxjFvMRjHJZKNptvFLJDQJWrDFSWfcKSHVmKDWvBvTHzhxcGlpnHHpMgFFZjLJCmrZg" target="_pop">
           <SiGmail /></a>
      
    </div>
  )
}

export default Socials
