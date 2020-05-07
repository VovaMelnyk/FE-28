import React, { Component } from "react";
import SimpleContext from "../simpleContext";
class SimpleProvider extends Component {
  state = {
    number: 10,
  };

  increment = () => {
    this.setState((prev) => ({
      number: prev.number + 1,
    }));
  };

  render() {
    const { number } = this.state;
    return (
      <SimpleContext.Provider value={{ number, increment: this.increment }}>
        {this.props.children}
      </SimpleContext.Provider>
    );
  }
}

export default SimpleProvider;
