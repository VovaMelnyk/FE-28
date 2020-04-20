import React from "react";
import classes from "./CartItem.module.css";
const CartItem = ({
  img,
  title,
  style,
  price,
  amount,
  id,
  deleteFromCart,
  index,
  editCartItem,
}) => {
  // const deleteItem = () => {
  //   deleteFromCart(id)
  // }
  const deleteItem = () => {
    deleteFromCart(index);
  };
  const editItemPlus = () => {
    editCartItem(index, "plus");
  };

  const editItemMinus = () => {
    editCartItem(index, "minus");
  };
  return (
    <div className={classes.Item}>
      <div className={classes.Delete} onClick={deleteItem}></div>
      <div className={classes.Thumb}>
        <img src={img} alt={title} />
      </div>
      <div className={classes.Details}>
        <p className={classes.Title}>{title}</p>
        <p className={classes.Desc}>{style}</p>
        <p className={classes.Amount}>Quantity: {amount}</p>
      </div>
      <div>
        <p className={classes.Price}>$ {(price * amount).toFixed(2)}</p>
        <button className={classes.Change} onClick={editItemMinus} disabled={amount === 1}>
          -
        </button>
        <button className={classes.Change} onClick={editItemPlus}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
