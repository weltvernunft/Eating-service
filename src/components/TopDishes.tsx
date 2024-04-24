import React from "react";
import DishItem from "./DishItem";
import ViewAll from "./ViewAll";
import "./Dishes.css";

const topDishes: Dish[] = [
  {
    name: "Chicken Hell",
    rating: 4.9,
    imageUrl: "../src/Images/top-dishes/1.png",
    tagName: "Healthy",
    deliveryTime: 24,
    cost: 12,
  },
  {
    name: "Swe Dish",
    rating: 4.2,
    imageUrl: "../src/Images/top-dishes/2.png",
    tagName: "Trending",
    deliveryTime: 45,
    cost: 11,
  },
  {
    name: "Sweet Delight",
    rating: 4.8,
    imageUrl: "../src/Images/top-dishes/3.png",
    tagName: "Delicious",
    deliveryTime: 25,
    cost: 19,
  },
  {
    name: "Spicy Supreme",
    rating: 4.8,
    imageUrl: "../src/Images/top-dishes/4.png",
    tagName: "Supreme",
    deliveryTime: 25,
    cost: 19,
  },
  {
    name: "Veggie Heaven",
    rating: 4.8,
    imageUrl: "../src/Images/top-dishes/5.png",
    tagName: "Supreme",
    deliveryTime: 25,
    cost: 19,
  },
];

const getTagColor = (tagName: string) => {
  switch (tagName) {
    case "Healthy":
      return "bg-yellow-100 text-yellow-600"; // Yellow background with dark text
    case "Trending":
      return "bg-blue-100 text-blue-600"; // Blue background with dark text
    case "Supreme":
      return "bg-green-100 text-green-600"; // Green background with dark text
    case "Delicious":
      return "bg-cyan-100 text-cyan-600"; // Cyan background with dark text
    default:
      return "bg-gray-100 text-gray-600"; // Gray background with dark text
  }
};

const TopDishes: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5">
      <h2 className="">
        Our Top <span className="text-global">Dishes</span>
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {topDishes.map((dish, index) => (
          <li
            key={index}
            className="dish-card bg-white rounded-3xl shadow-md hover:shadow-lg overflow-hidden"
          >
            <DishItem dish={dish} tagColor={getTagColor(dish.tagName)} />
          </li>
        ))}
      </ul>
      <ViewAll />
      <hr className="my-14" />
    </section>
  );
};

export default TopDishes;
