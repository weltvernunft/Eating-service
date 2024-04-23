import React from "react";
import star from "../Images/Star.svg";

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
    <div className="p-4">
      <img src={dish.imageUrl} alt={dish.name} className="w-full h-auto" />
      <div className="mt-4 text-left">
        <h3 className="text-lg font-semibold">{dish.name}</h3>
        <div className={`tag ${tagColor} py-1 px-2 rounded-md mt-2 inline-block`}>
          {dish.tagName}
        </div>
        <div className="rating flex gap-3">
          <p>{dish.deliveryTime} mins</p>
          <span className="bullet">&bull;</span>
          <img src={star} alt="star-image" />
          <p>{dish.rating}</p>
        </div>
        <p className="cost font-bold">${dish.cost}<span className="text-xs">.99</span></p>
      </div>
    </div>
  );
};

export default DishItem;
