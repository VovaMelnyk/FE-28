import React from "react";
import productsArr from "../../db/products.json";
import Card from "../Card/Card";
import classes from "./ShopSection.module.css";
const ShopSection = () => {
  return (
    <section className={classes.Container}>
      <div className={classes.CardHeader}>
        <small>
          <span>16 Product(s) found</span>
        </small>
        <div className={classes.Sort}>
          Order by
          <select>
            <option value="">Select</option>
            <option value="low">Lowest to highest</option>
            <option value="high">Highest to lowest</option>
          </select>
        </div>
      </div>
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
