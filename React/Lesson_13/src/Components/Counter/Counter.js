import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Counter.module.css";

class Counter extends Component {

  state = {
    number: 45,
  };

  plus = () => {
    this.setState((prev) => ({
      number: prev.number + 1,
    }));
  };

  minus = () => {
    this.setState((prev) => ({
      number: prev.number - 1,
    }));
  };

  reset = () => {
    this.setState({
      number: 0,
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div className={classes.Container}>
        <h1>Counter</h1>
        <div className={classes.Count}>{number}</div>
        <div>
          <button onClick={this.minus}>-</button>
          <button onClick={this.reset}>0</button>
          <button onClick={this.plus}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;

