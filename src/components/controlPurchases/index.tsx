import React from "react";
import purchaseIcon1 from "../../Images/icons/purchase-icon-1.svg";
import purchaseIcon2 from "../../Images/icons/purchase-icon-2.svg";
import { purchaseItems } from "./purchaseItems.js";

const dishData = [
  {
    imageUrl: "../../src/Images/top-dishes/1.png",
    title: "Spaghetti Carbonara",
    status: "Delivered",
    time: "12:30 PM",
  },
  {
    imageUrl: "../../src/Images/top-dishes/2.png",
    title: "Chicken Tikka Masala",
    status: "On the way",
    time: "1:45 PM",
  },
  {
    imageUrl: "../../src/Images/top-dishes/3.png",
    title: "Vegetable Stir Fry",
    status: "Canceled",
    time: "3:00 PM",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "text-green-600";
    case "On the way":
      return "text-blue-600";
    case "Canceled":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

const ControlPurchases: React.FC = () => {
  return (
    <section className="flex lg:flex-row">
      <div className="flex flex-col w-full lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-left">
          Control <span className="text-global">Purchases</span> Via Dashboard
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:max-w-[24rem]">
          {dishData.map((dish, index) => (
            <li
              key={index}
              className=" dish-item py-2 bg-white flex md:flex-1 flex-row gap-4 p-2 rounded-2xl relative shadow-md| hover:translate-x-5 transition-all hover:shadow-lg"
            >
              <img
                src={dish.imageUrl}
                alt={dish.title}
                className="w-20 rounded-full"
              />
              <div className="title-status flex flex-col justify-center text-left">
                <h3 className="text-lg font-semibold">{dish.title}</h3>
                <p className={`${getStatusColor(dish.status)} font-medium`}>
                  {dish.status}
                </p>
              </div>
              <p className="text-gray-400 text-xs absolute right-4 bottom-2 font-semibold">
                {dish.time}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="purchases | md:flex flex-col lg:w-1/2 px-0 py-0">
        <div className="purchases-container bg-white rounded-3xl p-10">
          <div className="purchase-header flex flex-row justify-between mb-8">
            <h3 className="text-left">Purchases</h3>
            <select
              name="timeline"
              id=""
              className="bg-gray-100 px-3 py-2 rounded-xl"
            >
              <option value="month">This month</option>
              <option value="week">This week</option>
              <option value="year">This year</option>
            </select>
          </div>
          <ul className="flex flex-col gap-5">
            {purchaseItems.map((item, index) => (
              <li
                key={index}
                className="purchase-item bg-white px-5 py-5 border rounded-2xl | hover:scale-105 | transition-all"
              >
                <div className="purchase-item__info flex flex-col sm:flex-row relative mb-4">
                  <img src={item.iconPath} alt="" className="mr-5 w-12" />
                  <div className="text-left">
                    <h4 className="">{item.title}</h4>
                    <p className="text-gray-400">
                      Increased by {item.increased}%
                    </p>
                  </div>
                  <h3 className="cost absolute right-0 bottom-0 text-xl">
                    ${item.price}
                  </h3>
                </div>
                <div
                  className={`purchase-bar w-full h-2 rounded-full ${item.barColor[0]}`}
                >
                  <div
                    className={`${item.barColor[1]} h-2 rounded-full`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ControlPurchases;
