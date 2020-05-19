import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Counter.module.css";
import { connect } from "react-redux";
// import { plus, minus, reset } from "../../redux/actions/counter"; // without slice
import { plus, minus, reset } from "../../redux/slice/counter";
import { useSelector, useDispatch } from "react-redux";
import { number } from "../../redux/slice/counter";

// class Counter extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div className={classes.Container}>
//         <h1>Counter</h1>
//         <div className={classes.Count}>{this.props.count}</div>
//         <div>
//           <button onClick={this.props.minus}>-</button>
//           <button onClick={this.props.reset}>0</button>
//           <button onClick={this.props.plusProps}>+</button>
//         </div>
//       </div>
//     );
//   }
// }

const selector = (state) => {
  return state.number.toFixed(2);
};

// const mapStateToProps = (state) => ({
//   count: selector(state),
// });

// const mapDispatchToProps = {
//   plusProps: plus,
//   minus,
//   reset,
// };

const Counter = () => {
  const counter = useSelector(number);
  const dispatch = useDispatch();

  const down = () => {
    dispatch(minus());
  };

  const up = () => {
    dispatch(plus());
  };

  const reload = () => {
    dispatch(reset());
  };

  return (
    <div className={classes.Container}>
      <h1>Counter</h1>
      <div className={classes.Count}>{counter}</div>
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
