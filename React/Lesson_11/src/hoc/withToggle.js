import React, { Component } from "react";

const withToggle = (NestedComponent) => {
  return class extends Component {
    state = {
      isOpen: false,
    };

    toggle = () => {
      this.setState((prev) => ({
        isOpen: !prev.isOpen,
      }));
    };

    render() {
      return (
        <NestedComponent
          {...this.props}
          status={this.state.isOpen}
          toggle={this.toggle}
        />
      );
    }
  };
};

export default withToggle;
