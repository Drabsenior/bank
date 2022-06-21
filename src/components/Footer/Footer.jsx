import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiOutlineInstagram,
  AiOutlineGooglePlus,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerwrapper">
      <div className="footercontainer">
        <div className="footericons">
          <GrFacebookOption className="socialicon" />
        </div>
        <div className="footericons">
          <AiOutlineInstagram className="socialicon" />
        </div>
        <div className="footericons">
          <RiTwitterLine className="socialicon" />
        </div>
        <div className="footericons">
          <AiOutlineGooglePlus className="socialicon" />
        </div>
      </div>
      <div className="footerdescription">
        <span>
          <AiOutlineCopyrightCircle className="copyrighticon" />
          CopyRight . All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
