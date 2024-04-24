import React from "react";
import featureL from "../Images/feature-l.svg";
import featureR from "../Images/feature-r.svg";

const FeaturesList = () => {
  // Define an array of objects containing the data for each list item
  const featuresData = [
    { num: "10K+", desc: "Satisfied Customers All Over The World" },
    { num: "4M", desc: "Healthy Dishes Sold Including Milk Shakes Smooth" },
    {
      num: "99.99%",
      desc: "Reliable Customer Support We Provide Great Experiences",
    },
  ];

  return (
    <div className="featured-items bg-[#5C4EAE] my-16 relative">
      <ul className="features-list flex flex-col md:flex-row items-center justify-center py-10">
        {featuresData.map((feature, index) => (
          <li
            key={index}
            className={`feature-item relative flex-col flex-1 items-center justify-center text-white px-16 max-w-[320px] border-box ${
              index === 1 ? "feature-border" : ""
            }`}
          >
            <div className="feature-num text-4xl text-center font-bold mb-2">
              {feature.num}
            </div>
            <div className="feature-desc text-white opacity-65 text-sm text-center">
              {feature.desc}
            </div>
          </li>
        ))}
      </ul>
      <img className="feature-l absolute" src={featureL} alt="" />
      <img className="feature-r absolute" src={featureL} alt="" />
    </div>
  );
};

export default FeaturesList;
