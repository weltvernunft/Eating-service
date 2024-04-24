import React from "react";
import "./Subscription.css";
import dish from "../Images/top-dishes/1.png";

const Subscription: React.FC = () => {
  return (
    <div className="subscribe-container bg-global mx-5 p-5 flex flex-col gap-5 subscription relative rounded-3xl mb-40">
      <span className="text-white text-5xl font-black z-10">GET 50%</span>
      <div className="relative z-10">
        <input
          type="text"
          placeholder="Enter email address"
          className="px-3 py-5 w-full premd:w-96 rounded-xl opacity-80"
        />
        <button className="subscribe-btn rounded-lg bg-global text-white px-6 py-2 top-3 bottom-3 absolute right-3 premd:right-auto premd:left-[15rem] uppercase">
          Subscribe
        </button>
      </div>
      <img src={dish} alt="dish" className="subscription-img" />
    </div>
  );
};

export default Subscription;
