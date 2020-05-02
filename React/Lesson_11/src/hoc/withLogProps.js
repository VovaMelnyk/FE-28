import React, { Component } from "react";

const withLog = (NestedComponent) => {
  return class extends Component {
    render() {
      console.log("withLogProps", this.props);
      return <NestedComponent {...this.props} />;
    }
  };
};

export default withLog;

// const withLog = (NestedComponent) => {
//   // do some logic
//   return (props) => <NestedComponent {...props} />;
// };

// export default withLog;
