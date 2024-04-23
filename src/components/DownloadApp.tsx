import React from "react";
import mobile from "../Images/Mobile.png";

const DownloadApp: React.FC = () => {
  const features = [
    "Premium quality food is made with ingredients that are packed with essential vitamins, minerals.",
    "These foods promote overall wellness by supporting healthy digestion and boosting immunity.",
  ];

  return (
    <section className="max-w-[1200px] flex flex-col md:flex-row items-center | text-center md:text-left mx-auto px-5">
      <div className="mobile-feature md:w-1/2 flex justify-center relative pb-10 md:pb-0">
        <img src={mobile} alt="Hero Image" className="w-[304px] " />
      </div>
      <div className="flex-col md:w-1/2">
        <h2>
          Premium <span className="text-global">Quality</span> For Your Health
          World
        </h2>
        <ul className="list-disc text-gray-400">
          {features.map((feature, index) => (
            <li key={index} className="mb-10 md:max-w-[500px] px-10 md:px-0">
              {feature}
            </li>
          ))}
        </ul>
        <button className="btn arrow-btn relative">
          Download<span className="text-1xl pl-5">➔</span>
        </button>
      </div>
    </section>
  );
};

export default DownloadApp;
