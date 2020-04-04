import React from "react";
import CartItem from "../CartItem/CartItem";
import classes from "./Cart.module.css";
const Cart = () => {
  const bag = [classes.Bag];
  const cart = [classes.Cart];
  // if(true) {
  //   cart.push(classes['Cart-open'])
  // }
  return (
    <div className={cart.join(' ')}>
      <span className={bag.join(' ')}>
        <span className={classes.Quantity}>16</span>
      </span>
      <div className={classes.Content}>
        <div className={classes.Container}>
          <CartItem/>
        </div>
        <div className={classes.Footer}>
          <div className={classes.Total}>
            <p className={classes.Sub}>TOTAL</p>
            <p className={classes["Total-amount"]}>$ 177.50</p>
          </div>
          <div className={classes["Buy-btn"]}>Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
