import React, { Component } from "react";

class Toggler extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState((prev) => ({
      open: !prev.open,
    }));
  };

  render() {
    return this.props.children({ open: this.state.open, toggle: this.toggle });
  }
}

export default Toggler;
