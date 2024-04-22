import React from "react";
import logo from "../Images/Logo.svg";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  return (
    <nav>
      <div className="flex logo-items items-center max-w-[140px]">
        <img src={logo} alt="logo w-[46px]" />
        <ul className="flex gap-4">
          {navItems.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
