import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Counter.module.css";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     number: 45
  //   }
  //   this.reset = this.reset.bind(this)
  // }

  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Counter'
  }

  state = {
    number: 45,
    isModalOpen: false,
  };

  // plus = async () => {
  //   console.log("Plus");
  //   await this.setState(previousState => ({
  //     number: previousState.number + 1
  //   }))

  //   console.log('number in plus', this.state.number);
  // }

  // minus = () => {
  //   console.log("minus");
  //   this.setState(prev => ({
  //     number: prev.number - 1
  //   }), () => console.log('number', this.state.number))
  // }

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
    // this.state.number = 0; bad

    // this.setState({
    //   ...this.state,
    //   number: 0
    // })
  };

  // {} link # => {} link#1
  // {} link #2
  // {} link #1 => link #2

  render() {
    const { number } = this.state;
    const { title } = this.props;
    // func props.title
    // class this.props.title
    return (
      <div className={classes.Container}>
        <h1>{title}</h1>
        <div className={classes.Count}>{number}</div>
        <div>
          <button onClick={this.minus}>-</button>
          <button onClick={this.reset}>0</button>
          {/* <button onClick={this.reset.bind(this)}>0</button> */}
          <button onClick={this.plus}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;

// const Counter = ({number}) => {
// return (
//   <div className={classes.Container}>
//     <div className={classes.Count}>{0}</div>
//     <div>
//       <button>-</button>
//       <button>0</button>
//       <button>+</button>
//     </div>
//   </div>
// );
// };

// export default Counter;
