import React from "react";
import './Card.css'
const Card = ({ shippingType, name, price }) => {
  return (
    <div className="card-item">
      <div className="card-stopper">{shippingType}</div>
      <div className="card-item__thumb">
        <img
          src="https://i.ibb.co/YfKsBj0/8552515751438644-1.jpg"
          alt="Cat Tee Black T-Shirt"
        />
      </div>
      <p className="card-item__title">{name}</p>
      <div className="card-item__price">
        <div className="val">$ {price}</div>
      </div>
      <div className="card-item__buy-btn">Add to cart</div>
    </div>
  );
};
export default Card;


// import {
//   CardItem,
//   CardStopper,
//   CardThumb,
//   CardTitle,
//   CardPrice,
//   BuyBtn,
//   BuyBtnPrimary,
//   BuyBtnSuccess
// } from "./Card.styled";

// const Card = props => {
//   return (
//     <CardItem>
//       <CardStopper>{props.shippingType}</CardStopper>
//       <CardThumb>
//         <img
//           src="https://i.ibb.co/YfKsBj0/8552515751438644-1.jpg"
//           alt="Cat Tee Black T-Shirt"BuyBtnPrimary
//         />
//       </CardThumb>
//       <CardTitle>{props.name}</CardTitle>
//       <CardPrice>$ {props.price}</CardPrice>
//       {/* <BuyBtn outlined>Add to cart</BuyBtn> */}
//       <BuyBtn>Add to cart</BuyBtn>
//       {/* <BuyBtn className='primary'>Add to cart</BuyBtn>
//       <BuyBtn className='primary large'>Add to cart</BuyBtn>
//       <BuyBtn className='success'>Add to cart</BuyBtn>
//       <BuyBtn className='disabled'>Add to cart</BuyBtn> */}
//       {/* <BuyBtn>Add to cart</BuyBtn>
//       <BuyBtnPrimary>Add to cart</BuyBtnPrimary>
//       <BuyBtnSuccess>Add to cart</BuyBtnSuccess> */}
//     </CardItem>
//   );
// };

// export default Card;
