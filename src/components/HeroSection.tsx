import React from "react";
import heroImage from "../Images/Hero.png";
import graphImage from "../Images/Graph.png";
import trustpilot from "../Images/trustpilot.svg";
import star from "../Images/Star.svg";
import OrderItem from "./controlPurchases/OrderItem";
import "./HeroSection.css";

const dish = {
  imageUrl: "../src/Images/top-dishes/1.png",
  title: "Spaghetti Carbonara",
  status: "Delivered",
  time: "12:30 PM",
};

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section max-w-[1200px] flex flex-col md:flex-row items-center gap-10 | text-center md:text-left px-5">
      <div className="flex-col md:w-1/2">
        <p className="hero-subtitle uppercase tracking-wider font-semibold text-gray-400 mb-5">
          over 1000 users
        </p>
        <h1 className=" text-5xl lg:text-6xl font-black mb-8">
          Enjoy Foods All Over The <span className="text-global">World</span>
        </h1>
        <p className="text-gray-400 mb-8">
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          <span className="text-global">Get a $20 bonus.</span>
        </p>
        <div className="buttons flex gap-4 mb-8 justify-center md:justify-normal">
          <button className="btn">Get Started</button>
          <button className="ghost-btn">Go Pro</button>
        </div>
        <div className="rate flex gap-5 items-baseline justify-center md:justify-normal">
          <img src={trustpilot} alt="" />
          <div className="stars flex gap-1 text-gray-400">
            <img src={star} alt="" />
            <span>4900+</span>
          </div>
        </div>
      </div>
      <div className="hero-right md:w-1/2 flex justify-center relative">
        <div className="hero-right__container absolute right-1 w-2/3 min-w-[300px]">
          <OrderItem
            dish={dish}
            getStatusColor={() => {
              return "text-green-600";
            }}
          />
        </div>
        <img
          src={heroImage}
          alt="Hero Image"
          className=" hero-dish w-full max-w-96 "
        />
        <img
          src={graphImage}
          alt="graph Image"
          className="hero-graph w-full max-w-56 absolute -bottom-10 left-0 "
        />
      </div>
    </section>
  );
};

export default HeroSection;
