import React from "react";
import star from "../Images/Star.svg";
import add from "../Images/icons/Add.svg";
import heart from "../Images/icons/Heart.svg";
import "./DishItem.css";

interface DishItemProps {
  dish: Dish;
  tagColor: string;
}

interface Dish {
  name: string;
  rating: number;
  imageUrl: string;
  tagName: string;
  deliveryTime: number;
  cost: string;
}

const DishItem: React.FC<DishItemProps> = ({ dish, tagColor }) => {
  return (
    <div className="p-4 flex flex-col relative">
      <img src={dish.imageUrl} alt={dish.name} className="h-auto" />
      <div className="text-left flex flex-col gap-3 items-start">
        <h4 className=" font-bold">{dish.name}</h4>
        <div className={`tag ${tagColor} py-1 px-2 rounded-md`}>
          {dish.tagName}
        </div>
        <div className="rating flex gap-3">
          <p>{dish.deliveryTime} mins</p>
          <span className="bullet">&bull;</span>
          <img src={star} alt="star-image" className="w-5" />
          <p>{dish.rating}</p>
        </div>
        <p className="cost font-bold text-2xl">
          ${dish.cost}
          <span className="text-xs text-gray-400">.99</span>
        </p>
      </div>
      <button>
        <img src={add} alt="add" className="absolute bottom-3 right-3" />
      </button>
      <button className="heart-btn">
        <img
          src={heart}
          alt="heart"
          className="heart-icon absolute top-3 right-3"
        />
      </button>
    </div>
  );
};

export default DishItem;
