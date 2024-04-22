import React from "react";
import NavBar from "./components/NavBar";

const navItems = ["Home", "About", "Services", "Contact"];

function App() {
  return (
    <div>
      <NavBar navItems={navItems} />
    </div>
  );
}

export default App;
