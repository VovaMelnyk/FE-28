import React, { Component } from "react";
import classes from "./Modal.module.css";
class Modal extends Component {
  state = {};

  //   static getDerivedStateFromProps() {}

  //   componentWillMount() {}

  //   componentWillReceiveProps(nextProps) {}

  //   shouldComponentUpdate(nextProps, nextState) {}

  //   componentWillUpdate(nextProps, nextState) {}

  //   getSnapshotBeforeUpdate(prevProps, prevState) {}

  //   componentDidUpdate(prevProps, prevState, snapshot) {}

  //   componentWillUnmount() {}

  render() {
    return (
      <div
        className={classes.overlay}
      >
        <div className={classes.modal}>
          <h1 className={classes.title}>Leave contact for order</h1>
          <form>
            <input
              type="email"
              placeholder="Enter email"
              className={classes.input}
              ref={this.emailRef}
            />
            <input
              type="text"
              placeholder="Enter phone"
              className={classes.input}
            />
            <button
              type="button"
              className={classes.btn}
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
