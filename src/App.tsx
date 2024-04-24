import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeaturedItems from "./components/FeaturedItems";
import DownloadApp from "./components/DownloadApp";
import TopRestaurants from "./components/TopRestaurants";
import TopDishes from "./components/TopDishes";
import ControlPurchases from "./components/controlPurchases/index";
import CustomerReviews from "./components/CustomerReviews";
import { reviews } from "./database/dataStorage.js";
import Subscription from "./components/Subscription.tsx";
import Footer from "./components/Footer.tsx";

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
      <ControlPurchases />
      <hr className="my-14" />
      <CustomerReviews reviews={reviews} />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
