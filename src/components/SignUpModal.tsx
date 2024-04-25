import React from "react";
import "./AuthModal.css";
import logo from "../Images/Logo.svg";
import img from "../Images/Hero.png";
import pattern from "../Images/pattern.png";
import googleIcon from "../Images/icons/google-icon.svg";
import appleIcon from "../Images/icons/apple-icon.svg";
import mailIcon from "../Images/icons/mail-icon.svg";
import lockIcon from "../Images/icons/lock-icon.svg";
import userIcon from "../Images/icons/user-icon.svg";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal fixed z-40 | flex w-[80%] left-[10%] top-[5%] | rounded-md overflow-hidden">
      <button onClick={onClose} className="absolute right-6 top-3 z-50">
        ✕
      </button>
      <div className="w-full md:w-1/2 bg-white flex flex-col gap-10 justify-between p-5 items-center text-center">
        <div className="logo w-full">
          <a href="/">
            <img src={logo} alt="logo" className="w-14" />
          </a>
        </div>
        <div className="auth-form flex flex-col gap-2">
          <h3>Sign Up to Eatly</h3>
          <div className="flex flex-col premd:flex-row gap-3 w-full">
            <a
              href="#"
              className="flex-1 flex justify-center items-center space-x-2 p-2 bg-gray-100 rounded-md | hover:bg-global transition-all"
            >
              <img src={googleIcon} alt="Google" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="flex-1 flex justify-center items-center space-x-2 p-2 bg-gray-100 rounded-md | hover:bg-global transition-all"
            >
              <img src={appleIcon} alt="Apple" className="w-5 h-5" />
            </a>
          </div>
          <span className="text-gray-400">OR</span>
          <form className="" >
            <div className="input-group">
              <img src={userIcon} alt="Username" className="input-icon" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="bg-gray-100"
              />
            </div>
            <div className="input-group">
              <img src={mailIcon} alt="Mail" className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="bg-gray-100"
              />
            </div>
            <div className="input-group">
              <img src={lockIcon} alt="Lock" className="input-icon" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="bg-gray-100"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-global py-3 rounded-lg w-full | hover:bg-global-shade transition-all"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="modal-links w-full flex justify-between text-xs text-gray-400">
          <a href="/">Privacy Policy</a>
          <a href="/">Copyright 2024</a>
        </div>
      </div>
      <div className="modal-right w-1/2 bg-global relative | flex-col items-center justify-center | text-white hidden md:flex">
        <div className="img w-2/4">
          <img src={img} alt="img" />
        </div>
        <h4 className="text-white mb-4">Find Foods With Love </h4>
        <p className="px-10 text-center text-xs opacity-70">
          Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
          Including Asian, Chinese, Italians And Many More. Our Dashboard Helps
          You To Manage Orders And Money.
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
