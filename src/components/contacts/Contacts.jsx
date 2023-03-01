import React from "react";
import "./contacts.css";
import contact from "../../pics/contacts.png";
import { TfiInstagram } from "react-icons/tfi";
import { SiGmail } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contacts">
      <h2>Contacts</h2>
      <div className="videos">
        <img src={contact} alt="contact"/>
        <div className="apps">
        <a href="https://wa.me/qr/CWYH77IQQSYQK1">
           <SiWhatsapp />
          </a>
          <a href="https://github.com/ManojAmirKalai">
           <VscGithubAlt />
          </a>
          <a href="https://www.linkedin.com/in/manoj-amirthalingam-6a5394220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5wGv0J8%2FTHS%2FNg7QIfSlpQ%3D%3D">
            <SlSocialLinkedin />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmXxjFvMRjHJZKNptvFLJDQJWrDFSWfcKSHVmKDWvBvTHzhxcGlpnHHpMgFFZjLJCmrZg">
           <SiGmail />
          </a>
          <a href="https://www.instagram.com/am__rare_one/">
           <TfiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
