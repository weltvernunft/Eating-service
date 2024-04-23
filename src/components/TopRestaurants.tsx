import React from "react";
import RestaurantCard from "./RestaurantCard";

const TopRestaurants: React.FC = () => {
  const topRestaurants: Restaurant[] = [
    {
      name: "Restaurant A",
      rating: 4.5,
      imageUrl: "../src/Images/top-restaurants/rest-1.png",
      tagName: "Healthy",
      deliveryTime: 30, // Add delivery time in minutes
    },
    {
      name: "Restaurant B",
      rating: 4.2,
      imageUrl: "../src/Images/top-restaurants/rest-2.png",
      tagName: "Trending",
      deliveryTime: 45, // Add delivery time in minutes
    },
    {
      name: "Restaurant C",
      rating: 4.8,
      imageUrl: "../src/Images/top-restaurants/rest-3.png",
      tagName: "Delicious",
      deliveryTime: 25, // Add delivery time in minutes
    },
  ];

  const getTagColor = (tagName: string) => {
    switch (tagName) {
      case "Healthy":
        return "bg-yellow-100 text-yellow-600"; // Yellow background with dark text
      case "Trending":
        return "bg-blue-100 text-blue-600"; // Blue background with dark text
      case "Delicious":
        return "bg-green-100 text-green-600"; // Green background with dark text
      default:
        return "bg-gray-100 text-gray-600"; // Gray background with dark text
    }
  };

  return (
    <section className="">
      <h2>
        Our Top <span className="text-global">Restaurants</span>
      </h2>
      <div className="restaurants-list flex flex-col md:flex-row justify-center gap-7 mb-4">
        {topRestaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            restaurant={restaurant}
            tagColor={getTagColor(restaurant.tagName)}
            className="flex flex-grow"
          />
        ))}
      </div>
      <div className="view-all w-full relative">
        <button className="absolute md:right-0 text-gray-400">
          View all ➔
        </button>
      </div>
      <hr className="my-14" />
    </section>
  );
};

export default TopRestaurants;
