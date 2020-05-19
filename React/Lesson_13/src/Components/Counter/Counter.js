import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Counter.module.css";
import { connect } from "react-redux";
import { plus, minus, reset } from "../../redux/actions/counter";
import { useSelector, useDispatch } from "react-redux";
// import {
//   increment,
//   decrement,
//   reset,
//   counter,
// } from "../../redux/reducers/counter"; // slice
const Counter = () => {
  const number = useSelector((state) => state.number);
  // const number = useSelector(counter); // slice

  const dispatch = useDispatch();

  const down = () => {
    dispatch(minus());
  };

  // const down = () => {
  //   dispatch(decrement());
  // }; // slice

  const up = () => {
    dispatch(plus());
  };

  // const up = () => {
  //   dispatch(increment());
  // }; // slice

  const reload = () => {
    dispatch(reset());
  };

  return (
    <div className={classes.Container}>
      <h1>Counter</h1>
      <div className={classes.Count}>{number}</div>
      <div>
        <button onClick={down}>-</button>
        <button onClick={reload}>0</button>
        <button onClick={up}>+</button>
      </div>
    </div>
  );
};

export default Counter;

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// let fromRedux = { count: 0 };

// let props = this.props;

// props = { ...this.props, ...fromRedux };
