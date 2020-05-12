import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Counter.module.css";
import { connect } from "react-redux";
import { plus, minus, reset } from "../../redux/actions/counter";

class Counter extends Component {
  // state = {
  //   number: 45,
  // };

  // plus = () => {
  //   this.setState((prev) => ({
  //     number: prev.number + 1,
  //   }));
  // };

  // minus = () => {
  //   this.setState((prev) => ({
  //     number: prev.number - 1,
  //   }));
  // };

  // reset = () => {
  //   this.setState({
  //     number: 0,
  //   });
  // };

  render() {
    console.log(this.props);
    return (
      <div className={classes.Container}>
        <h1>Counter</h1>
        <div className={classes.Count}>{this.props.count}</div>
        <div>
          <button onClick={this.props.minus}>-</button>
          <button onClick={this.props.reset}>0</button>
          <button onClick={this.props.plusProps}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.number,
});

// const mapDispatchToProps = (dispatch) => ({
//   plusProps: () => dispatch(plus()),
// });

const mapDispatchToProps = {
  plusProps: plus,
  minus,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// let fromRedux = { count: 0 };

// let props = this.props;

// props = { ...this.props, ...fromRedux };
