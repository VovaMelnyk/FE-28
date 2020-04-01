import React from "react";
import Card from "../Card/Card";
import classes from './ShopSection.module.css'

const ShopSection = () => {
  return (
    <section className={classes.Container}>
      <div className={classes['Сontainer-header']}>
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
      <Card shippingType="shipping" name="T-Shirt" price="1000" />
      <Card shippingType="Free" name="Cat Tee Black" price="25" />
      <Card shippingType="Not Find" name="Cat " price="2" />
      <Card shippingType="dff" name="Hello" price="5" />
      {/* <Card/>
            <Card/>
            <Card/>
            <Card/> */}
    </section>
  );
};

export default ShopSection;
