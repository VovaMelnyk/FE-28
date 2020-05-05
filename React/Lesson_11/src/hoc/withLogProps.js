import React, { Component } from "react";

const withProps = (NestedComponent) => {
  return class extends Component {
    render() {
      console.log(this.props);
      return <NestedComponent {...this.props} />;
    }
  };
};

export default withProps;
