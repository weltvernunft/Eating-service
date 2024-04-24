import React from "react";
import bookmark from "../Images/icons/Bookmark.svg";
import star from "../Images/Star.svg";
import "./RestaurantCard.css"

interface RestaurantCardProps {
  restaurant: Restaurant;
  tagColor: string;
}

interface Restaurant {
  name: string;
  tagName: string;
  rating: number;
  deliveryTime: number;
  imageUrl: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  tagColor,
}) => {
  return (
    <div className="restaurant-card bg-white p-0 rounded-md flex-grow rounded-[1rem] overflow-hidden ">
      <div className="md:max-w-[400px] overflow-hidden relative">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.imageUrl}
          className="w-full md:h-28 lg:h-44 object-cover"
        />
      </div>
      <div className="restaurant-content flex p-5 justify-between">
        <div className="restaurant-text text-left ">
          <span className={`bookmark ${tagColor} px-3 py-1 rounded-lg mb-7`}>
            {restaurant.tagName}
          </span>
          <h3 className="my-1">{restaurant.name}</h3>
          <div className="rating flex gap-3">
            <p>{restaurant.deliveryTime} mins</p>
            <span className="bullet">&bull;</span>
            <img src={star} alt="star-image" />
            <p>{restaurant.rating}</p>
          </div>
        </div>
        <div className="bookmark-button inline-flex items-end">
          <button className="">
            <img src={bookmark} alt="bookmark" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
