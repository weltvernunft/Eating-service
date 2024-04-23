import React from "react";
import DishItem from "./DishItem";

const topDishes: Dish[] = [
  {
    name: "Chicken Hell",
    rating: 4.9,
    imageUrl: "../src/Images/top-dishes/1.png",
    tagName: "Healthy",
    deliveryTime: 24,
    cost: 12.99,
  },
  {
    name: "Swe Dish",
    rating: 4.2,
    imageUrl: "../src/Images/top-dishes/2.png",
    tagName: "Trending",
    deliveryTime: 45,
    cost: 11.99,
  },
  {
    name: "Sweet Delight",
    rating: 4.8,
    imageUrl: "../src/Images/top-dishes/3.png",
    tagName: "Delicious",
    deliveryTime: 25,
    cost: 19.99,
  },
  {
    name: "Spicy Supreme",
    rating: 4.8,
    imageUrl: "../src/Images/top-dishes/3.png",
    tagName: "Supreme",
    deliveryTime: 25,
    cost: 19.99,
  },
  {
    name: "Veggie Heaven",
    rating: 4.8,
    imageUrl: "../src/Images/top-dishes/3.png",
    tagName: "Supreme",
    deliveryTime: 25,
    cost: 19.99,
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
      return "bg-cyan-100 text-cyan-600"; // Green background with dark text
    default:
      return "bg-gray-100 text-gray-600"; // Gray background with dark text
  }
};

const TopDishes: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-3xl font-semibold mb-8">Top Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topDishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <DishItem
              dish={dish}
              key={index}
              name={dish.name}
              rating={dish.rating}
              imageUrl={dish.imageUrl}
              tagColor={getTagColor(dish.tagName)}
              deliveryTime={dish.deliveryTime}
              cost={dish.cost}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDishes;
