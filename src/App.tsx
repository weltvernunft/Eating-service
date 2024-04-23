import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeaturedItems from "./components/FeaturedItems";
import DownloadApp from "./components/DownloadApp";
import TopRestaurants from "./components/TopRestaurants";
import TopDishes from "./components/TopDishes";

const navItems = ["Home", "About", "Services", "Contact"];

function App() {
  return (
    <div className="bg-global-bg">
      <NavBar navItems={navItems} />
      <HeroSection />
      <FeaturedItems />
      <DownloadApp />
      <hr className="my-14" />
      <TopRestaurants />
      <TopDishes />
    </div>
  );
}

export default App;
