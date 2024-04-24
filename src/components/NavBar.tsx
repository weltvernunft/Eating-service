import React from "react";
import { useState } from "react";
import logo from "../Images/Logo.svg";
import AuthModal from "./AuthModal";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <nav className="flex justify-between mt-1 border-b border-gray-300 pb-3 items-center mb-8 px-5">
        <div className="flex gap-[100px] logo-items items-center">
          <a href="/" className="">
            <img src={logo} alt="logo" className="w-[85px]" />
          </a>
          <ul className="hidden md:flex gap-4 text-xg">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="/" className="nav-item text-gray-500 hover:text-global-shade">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden xs:flex gap-3">
            <button onClick={handleLoginClick} className="text-global hover:text-global-shade">Login</button>
            <button className="btn">Sign Up</button>
          </div>
          <div className="hamburger-icon block md:hidden"></div>
        </div>
      </nav>
      <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default NavBar;
