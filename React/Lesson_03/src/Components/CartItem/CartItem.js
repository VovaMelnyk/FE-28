import React from 'react';
import classes from './CartItem.module.css';
const CartItem = () => {
    return (
        <div className={classes.Item}>
            <div className={classes.Delete}></div>
            <div className={classes.Thumb}>
              <img
                src="https://i.ibb.co/YfKsBj0/8552515751438644-1.jpg"
                alt="Skuul"
              />
            </div>
            <div className={classes.Details}>
              <p className={classes.Title}>Skuul</p>
              <p className={classes.Desc}>Black T-Shirt with front print</p>
              <p className={classes.Amount}>Quantity: 1</p>
            </div>
            <div>
              <p className={classes.Price}>$ 14.00</p>
              <button className={classes.Change}>-</button>
              <button className={classes.Change}>+</button>
            </div>
          </div>
    );
};

export default CartItem;