import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="float-cart">
      {/* <!-- cart icon start  --> */}
      <span className="bag bag--float-cart-closed">
        <span className="bag__quantity">16</span>
      </span>
      {/* <!-- cart icon end --> */}
      <div className="float-cart__content">
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">16</span>
          </span>
          <span className="float-cart__header-title">Cart </span>
        </div>
        <div className="float-cart__card-container">
          <div className="cart-item">
            <div className="cart-item__del"></div>
            <div className="cart-item__thumb">
              <img
                src="https://i.ibb.co/YfKsBj0/8552515751438644-1.jpg"
                alt="Skuul"
              />
            </div>
            <div className="cart-item__details">
              <p className="title">Skuul</p>
              <p className="desc">Black T-Shirt with front print</p>
              <p className="desc">Quantity: 1</p>
            </div>
            <div className="cart-item__price">
              <p>$ 14.00</p>
              <button disabled="" className="change-product-button">
                -
              </button>
              <button className="change-product-button">+</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-item__del"></div>
            <div className="cart-item__thumb">
              <img
                src="data:image/jpeg;base64,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"
                alt="Sphynx Tie Dye Grey T-Shirt"
              />
            </div>
            <div className="cart-item__details">
              <p className="title">Sphynx Tie Dye Grey T-Shirt</p>
              <p className="desc">Preta com listras brancas</p>
              <p className="desc">Quantity: 15</p>
            </div>
            <div className="cart-item__price">
              <p>$ 10.90</p>
              <button className="change-product-button">-</button>
              <button className="change-product-button">+</button>
            </div>
          </div>
        </div>
        <div className="float-cart__footer">
          <div className="total">
            <p className="sub">TOTAL</p>
            <p className="price-total">$ 177.50</p>
          </div>
          <div className="buy-btn">Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
