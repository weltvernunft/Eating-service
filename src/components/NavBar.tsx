import React from "react";
import { useState, useEffect } from "react";
import logo from "../Images/Logo.svg";
import AuthModal from "./AuthModal";
import SignUpModal from "./SignUpModal";
import Overlay from "./Overlay";
import "./NavBar.css";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isNavShown, setIsNavShown] = useState(false);

  const handleShowNav = () => {
    setIsNavShown(!isNavShown);
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  const handleCloseSignup = () => {
    setIsSignupOpen(false);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLoginOpen(false);
        setIsSignupOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <>
      <nav className="flex justify-between mt-1 border-b border-gray-300 pb-3 items-center mb-8 px-5">
        <div className="flex gap-[100px] logo-items items-center">
          <a href="/" className="">
            <img src={logo} alt="logo" className="w-[85px]" />
          </a>
          <ul
            className={`pt-[44px] md:pt-0 nav-bar md:flex gap-4 text-xg ${
              isNavShown ? "" : "hidden"
            }`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="/"
                  className="nav-item text-gray-500 hover:text-global-shade"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden xs:flex gap-3">
            <button
              onClick={handleLoginClick}
              className="text-global hover:text-global-shade"
            >
              Login
            </button>
            <button className="btn" onClick={handleSignupClick}>
              Sign Up
            </button>
          </div>
          <div
            className="hamburger-icon-wrapper bg-white md:hidden z-50"
            onClick={handleShowNav}
          >
            <div
              className={`hamburger-icon ${isNavShown ? "cross" : ""}`}
            ></div>
          </div>
        </div>
      </nav>
      <AuthModal isOpen={isLoginOpen} onClose={handleCloseLogin} />
      <SignUpModal isOpen={isSignupOpen} onClose={handleCloseSignup} />
      {(isLoginOpen || isSignupOpen) && (
        <div className="overlay fixed inset-0 bg-black bg-opacity-50 z-10"></div>
      )}
    </>
  );
};

export default NavBar;
