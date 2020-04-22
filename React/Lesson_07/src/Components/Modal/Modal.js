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
    const { email, phone } = this.state;
    e.preventDefault();
    this.props.makeOrder(email, phone);
    this.props.onClose();
  };

  render() {
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
