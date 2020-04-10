import React from "react";
import PropTypes from "prop-types";
import classes from './Card.module.css';


const Card = ({ shippingType, name, price, img, addToCart, id }) => {
  const add = () => {
    addToCart(id)
  }
  return (
    <div className={classes.Card}>
      {shippingType && <p className={classes.Stopper}>Free</p>}
      <div className={classes.Thumb}>
        <img src={img} alt={name} />
      </div>
      <h2 className={classes.Title}>{name}</h2>
      <p className={classes.Price}>$ {price}</p>
      <button className={classes['Buy-btn']} onClick={add}>Add to cart</button>
    </div>
  );
};

Card.propTypes = {
  shippingType: PropTypes.bool,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};

Card.defaultProps = {
  shippingType: false
};

export default Card;
