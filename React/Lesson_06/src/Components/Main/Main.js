import React from "react";
import Aside from "../Aside/Aside";
import ShopSection from "../ShopSection/ShopSection";
import classes from './Main.module.css'
const Main = ({cardsArr, addToCart}) => {
  return (
    <main className={classes.Main}>
      <Aside />
      <ShopSection cardsArr={cardsArr} addToCart={addToCart}/>
    </main>
  );
};

export default Main;
