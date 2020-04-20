import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import products from "./db/products.json";

const AppHooks = () => {
  const [cardsArr, setCardArr] = useState(products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCollection, setCartCollection] = useState([])
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  const addToCart = (id) => {
    const item = cardsArr.find((el) => el.id === id);
    const isItemExist = cartCollection.find(el => el.id === id);
    if (isItemExist) {
      const index = cartCollection.indexOf(isItemExist)
      editCartItem(index, 'plus');
      return
    }
    item.amount = 1;
    setCartCollection([item, ...cartCollection])
  }
  const deleteFromCart = (index) => {
    const newCartCollection = [...cartCollection];
    newCartCollection.splice(index, 1);
    setCartCollection(newCartCollection)
  };
  const editCartItem = (index, type) => {
    const newCartCollection = [...cartCollection];
    const element = { ...cartCollection[index] };
    switch (type) {
      case "plus":
        element.amount = element.amount + 1;
        break;
      case "minus":
        element.amount = element.amount - 1;
        break;
      default:
        break;
    }
    newCartCollection[index] = element;
    setCartCollection(newCartCollection)
  };
  return (
    <>
      <Header />
      <Main cardsArr={cardsArr} addToCart={addToCart}/>
      <Cart
          cartCollection={cartCollection}
          isCartOpen={isCartOpen}
          toggleCart={toggleCart}
          deleteFromCart={deleteFromCart}
          editCartItem={editCartItem}
        />
    </>
  );
};

export default AppHooks;
