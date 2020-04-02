import React from "react";
import Aside from "../Aside/Aside";
import ShopSection from "../ShopSection/ShopSection";
import "./Main.css";
const Main = () => {
  return (
    <main className="Main">
      <Aside />
      <ShopSection />
    </main>
  );
};

export default Main;
