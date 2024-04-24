import React from "react";
import logo from "../Images/Logo.svg";
import facebook from "../Images/icons/social-media/facebook.svg";
import inst from "../Images/icons/social-media/inst.svg";
import linked from "../Images/icons/social-media/linked.svg";
import twitter from "../Images/icons/social-media/twitter.svg";

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons flex gap-5 items-center justify-center">
      <a href="#" className="icon">
        <img src={inst} alt="inst" />
      </a>
      <a href="#" className="icon">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="#" className="icon">
        <img src={linked} alt="linked" />
      </a>
      <a href="#" className="icon">
        <img src={twitter} alt="twitter" />
      </a>
    </div>
  );
};

export default SocialIcons;
