import React from "react";
import PropTypes from "prop-types";

import {
  CardItem,
  CardStopper,
  CardThumb,
  CardTitle,
  CardPrice,
  BuyBtn,
  BuyBtnPrimary,
  BuyBtnSuccess,
} from "./Card.styled";

const Card = ({ shippingType, name, price, img }) => {
  return (
    <CardItem>
      {shippingType && <CardStopper>Free</CardStopper>}
      <CardThumb>
        <img src={img} alt={name} />
      </CardThumb>
      <CardTitle>{name}</CardTitle>
      <CardPrice>$ {price}</CardPrice>
      <BuyBtn>Add to cart</BuyBtn>
      <BuyBtn outlined>Add to cart</BuyBtn>
      {/* withClasses */}
      {/* <BuyBtn className="primary">Add to cart</BuyBtn>
      <BuyBtn className="success">Add to cart</BuyBtn>
      <BuyBtn className="large">Add to cart</BuyBtn>
      <BuyBtn className="disabled">Add to cart</BuyBtn> */}
      <BuyBtnPrimary>Add to cart</BuyBtnPrimary>
      <BuyBtnSuccess>Add to cart</BuyBtnSuccess>
    </CardItem>
  );
};

Card.propTypes = {
  shippingType: PropTypes.bool,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  // p1: PropTypes.bool,
  // p2: PropTypes.func,
  // // arr: PropTypes.array
  // arr: PropTypes.arrayOf(PropTypes.number),
  // arr: PropTypes.arrayOf(PropTypes.shape({})),

  // // obj: PropTypes.object,
  // obj: PropTypes.shape({
  //   a: PropTypes.number,
  //   b: PropTypes.bool
  // })
};

Card.defaultProps = {
  shippingType: false,
};

export default Card;
