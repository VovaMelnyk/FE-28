import React from "react";
import Aside from "../Aside/Aside";
import ShopSection from "../ShopSection/ShopSection";
import classes from './Main.module.css'
const Main = () => {
  return (
    <main className={classes.Main}>
      <Aside />
      <ShopSection />
    </main>
  );
};

export default Main;
