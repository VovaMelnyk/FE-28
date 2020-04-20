import React, { Component, createRef } from "react";
import classes from "./Modal.module.css";
class Modal extends Component {
  emailRef = createRef();
  overlayRef = createRef();

  state = {
    email: "",
    phone: "",
  };

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  // constructor() {
  //   super()
  //   this.state = {
  //     title: this.props.title
  //   }
  //   this.handler = this.handler.bind(this)
  // }

  // static getDerivedStateFromProps() {} // new (componentWillMount, componentWillUpdate, componentWillReceiveProps)

  // // Mounting
  // componentWillMount() {
  //   console.log("componentWillMount");
  //   // this.setState({}) // не можна
  // } // old

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // Update

  // componentWillReceiveProps(nextProps) {} // old

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log("Next State", nextState);
  //   // console.log("Old state", this.state);
  //   // if (nextState.email.trim() !== this.state.email) {
  //   //   return true;
  //   // }

  //   // if (nextState.phone.trim() !== this.state.phone) {
  //   //   console.log("shouldComponentUpdate");
  //   //   return true;
  //   // }

  //   // return false;
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   // old
  //   console.log("componentWillUpdate");
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevState", prevState);
  //   console.log("New state", this.state);
  //   console.log("componentDidUpdate");
  //   if (prevState.phone !== this.state.phone) {
  //     this.setState({
  //       email: "user@gmail.com",
  //     });
  //   }
  // }

  //   componentWillUpdate(nextProps, nextState) {}

  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  // componentDidUpdate(prevProps, prevState, snapshot) {}

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  closeOverlay = (e) => {
    if (e.target !== this.overlayRef.current) {
      return;
    }
    this.props.onClose();
  };

  closeWindowWithEscapeButton = (e) => {
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };

  componentDidMount() {
    this.emailRef.current.focus();
    window.addEventListener("keydown", this.closeWindowWithEscapeButton);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeWindowWithEscapeButton);
  }

  formSubmit = (e) => {
    e.preventDefault();
    // axios.post()
    this.props.onClose();
  };

  render() {
    // console.log("render");
    return (
      <div
        className={classes.overlay}
        ref={this.overlayRef}
        onClick={this.closeOverlay}
      >
        <div className={classes.modal}>
          <h1 className={classes.title}>Leave contact for order</h1>
          <form onSubmit={this.formSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              className={classes.input}
              name="email"
              onChange={this.inputHandler}
              ref={this.emailRef}
            />
            <input
              type="text"
              placeholder="Enter phone"
              className={classes.input}
              name="phone"
              onChange={this.inputHandler}
            />
            <button
              type="button"
              className={classes.btn}
              onClick={this.props.onClose}
            >
              Close
            </button>
            <button type="submit" className={classes.btn}>
              Make order
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
