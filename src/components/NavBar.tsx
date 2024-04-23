import React from "react";
import logo from "../Images/Logo.svg";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  return (
    <nav className="flex justify-between mt-1 border-b border-gray-300 pb-3 items-center mb-8 px-5">
      <div className="flex gap-[100px] logo-items items-center w-[85px]">
        <img src={logo} alt="logo" />
        <ul className="hidden md:flex gap-4 text-xg">
          {navItems.map((item, index) => (
            <li>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden xs:flex gap-3">
          <button>Login</button>
          <button className="btn">Sign Up</button>
        </div>
        <div className="hamburger-icon block md:hidden"></div>
      </div>
    </nav>
  );
};

export default NavBar;
