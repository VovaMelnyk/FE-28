import React from "react";
import PropTypes from "prop-types";
import classes from './Card.module.css';


const Card = ({ shippingType, name, price, img }) => {
  return (
    <div className={classes.Card}>
      {shippingType && <p className={classes.Stopper}>Free</p>}
      <div className={classes.Thumb}>
        <img src={img} alt={name} />
      </div>
      <h2 className={classes.Title}>{name}</h2>
      <p className={classes.Price}>$ {price}</p>
      <button className={classes['Buy-btn']}>Add to cart</button>
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
