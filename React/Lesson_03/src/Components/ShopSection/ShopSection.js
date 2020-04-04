import React from "react";
import productsArr from "../../db/products.json";
import Card from "../Card/Card";
import classes from "./ShopSection.module.css";
import ShopSectionHeader from "../ShopSectionHeader/ShopSectionHeader";
const ShopSection = () => {
  return (
    <section className={classes.Container}>
      <ShopSectionHeader/>
      <>
        {productsArr.map(el => (
          <Card
            key={el.id}
            name={el.title}
            price={el.price}
            shippingType={el.isFreeShipping}
            img={el.img}
          />
        ))}
      </>
    </section>
  );
};

export default ShopSection;
