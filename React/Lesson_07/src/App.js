import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import storage from "./utils/storage";
import axios from "./axios/axios";
import Loader from "./Components/Loader/Loader";

class App extends Component {
  state = {
    cardsArr: null,
    isCartOpen: false,
    cartCollection: [],
    contactModal: false,
    isLoader: true,
    isError: false,
  };

  toggleModal = () => {
    this.setState((prev) => ({
      contactModal: !prev.contactModal,
    }));
  };

  toggleCart = () => {
    this.setState((prev) => ({
      isCartOpen: !prev.isCartOpen,
    }));
  };

  addToCart = (id) => {
    const item = this.state.cardsArr.find((el) => el.id === id);
    const isItemExist = this.state.cartCollection.find((el) => el.id === id);
    if (isItemExist) {
      const index = this.state.cartCollection.indexOf(isItemExist);
      this.editCartItem(index, "plus");
      return;
    }
    item.amount = 1;
    this.setState((prev) => ({
      cartCollection: [item, ...prev.cartCollection],
    }));
  };

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
    newCartCollection[index] = element;
    this.setState({
      cartCollection: newCartCollection,
    });
  };

  getProducts = async () => {
    try {
      const result = await axios.get("products.json");
      this.setState({
        cardsArr: result.data,
        isLoader: false,
      });
    } catch (error) {
      this.setState({
        isError: true,
        isLoader: false,
      });
    }
  };

  // axios.get('products,json')
  // .then(res => {
  //   this.setState({
  //     cardsArr: res.data,
  //   })
  // }).catch(err => {
  //   this.setState({
  //     isError: true
  //   })
  // }).finally(() => {
  //   this.setState({
  //     isLoader: false
  //   })
  // })

  async componentDidMount() {
    const cartData = storage.get("cart");
    if (cartData) {
      this.setState({
        cartCollection: cartData,
      });
    }
    this.getProducts();
  }

  updateStorage = (prevState) => {
    if (prevState.cartCollection !== this.state.cartCollection) {
      storage.save("cart", this.state.cartCollection);
      console.log("Update");
    }
  };

  componentDidUpdate(prevProps, prevState) {
    this.updateStorage(prevState);
  }

  makeOrder = async (email, phone) => {
    this.setState({
      isLoader: true,
    });
    const order = {
      products: this.state.cartCollection,
      email,
      phone,
    };
    try {
      axios.post("orders.json", order);
      this.setState({
        isLoader: false,
      });
    } catch (error) {
      this.setState({
        isLoader: false,
        isError: true,
      });
    }
  };

  render() {
    const {
      cardsArr,
      cartCollection,
      isCartOpen,
      contactModal,
      isLoader,
      isError,
    } = this.state;
    return (
      <>
        {contactModal && (
          <Modal onClose={this.toggleModal} makeOrder={this.makeOrder} />
        )}
        <Header />
        {!isLoader && !isError && (
          <Main cardsArr={cardsArr} addToCart={this.addToCart} />
        )}
        {isLoader && <Loader />}
        {isError && <p>Something went wrong try again later</p>}
        <Cart
          cartCollection={cartCollection}
          isCartOpen={isCartOpen}
          toggleCart={this.toggleCart}
          deleteFromCart={this.deleteFromCart}
          editCartItem={this.editCartItem}
          toggleModal={this.toggleModal}
        />
      </>
    );
  }
}

export default App;
