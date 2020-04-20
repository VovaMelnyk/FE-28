import React from "react";
import Card from "../Card/Card";
import classes from "./ShopSection.module.css";
import ShopSectionHeader from "../ShopSectionHeader/ShopSectionHeader";
const ShopSection = ({cardsArr, addToCart}) => {
  const productsCount = cardsArr.length
  return (
    <section className={classes.Container}>
      <ShopSectionHeader productsCount={productsCount}/>
      <>
        {cardsArr.map(el => (
          <Card
            key={el.id}
            name={el.title}
            price={el.price}
            shippingType={el.isFreeShipping}
            img={el.img}
            addToCart={addToCart}
            id={el.id}
          />
        ))}
      </>
    </section>
  );
};

export default ShopSection;
