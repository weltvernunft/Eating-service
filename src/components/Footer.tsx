import React from "react";
import logo from "../Images/Logo.svg";
import facebook from "../Images/icons/social-media/facebook.svg";
import inst from "../Images/icons/social-media/inst.svg";
import linked from "../Images/icons/social-media/linked.svg";
import twitter from "../Images/icons/social-media/twitter.svg";
import SocialIcons from "./SocialIcons";

const navItems = ["Blog", "Pricing", "About Us", "Contact"];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4">
      <nav className="flex flex-col sm:flex-row justify-between sm:items-center">
        <a href="/">
          <img src={logo} alt="logo" className="mb-5 sm:mb-0 w-24" />
        </a>
        <ul className="flex flex-col sm:flex-row gap-1 sm:gap-5 text-sm text-gray-500">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="my-8 border-gray-400" />
      <div className="flex flex-col sm:flex-row gap-5 mx-auto text-center justify-between">
        <p className="text-sm text-gray-500">
          © 2024 EATLY All Rights Reserved.
        </p>

        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
