import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import products from "./db/products.json";
// import Counter from "./Components/Counter/Counter";
import "./App.css";

class App extends Component {
  state = {
    cardsArr: products,
    isCartOpen: false,
    cartCollection: [],
  };

  toggleCart = () => {
    this.setState((prev) => ({
      isCartOpen: !prev.isCartOpen,
    }));
  };

  addToCart = (id) => {
    const item = this.state.cardsArr.find((el) => el.id === id);
    // const isItemExist = this.state.cartCollection.includes(item);
    const isItemExist = this.state.cartCollection.find(el => el.id === id);
    if (isItemExist) {
      const index = this.state.cartCollection.indexOf(isItemExist)
      this.editCartItem(index, 'plus');
      return
    }
    item.amount = 1;
    this.setState((prev) => ({
      cartCollection: [item, ...prev.cartCollection],
    }));
  };

  // deleteFromCart = (id) => {
  //   this.setState((prev) => ({
  //     cartCollection: prev.cartCollection.filter((el) => el.id !== id),
  //   }));
  // };

  deleteFromCart = (index) => {
    const newCartCollection = [...this.state.cartCollection];
    newCartCollection.splice(index, 1);
    this.setState({
      cartCollection: newCartCollection,
    });
  };

  editCartItem = (index, type) => {
    const newCartCollection = [...this.state.cartCollection];
    const element = { ...this.state.cartCollection[index] };
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
    // newCartCollection.splice(index, 1, element);
    newCartCollection[index] = element;
    this.setState({
      cartCollection: newCartCollection,
    });
  };

  render() {
    const { cardsArr, cartCollection, isCartOpen } = this.state;
    return (
      <>
        <Header />
        <Main cardsArr={cardsArr} addToCart={this.addToCart} />
        <Cart
          cartCollection={cartCollection}
          isCartOpen={isCartOpen}
          toggleCart={this.toggleCart}
          deleteFromCart={this.deleteFromCart}
          editCartItem={this.editCartItem}
        />
        {/* <Counter/> */}
      </>
    );
  }
}

export default App;
