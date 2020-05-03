import React, { Component } from "react";

const withLogProps = (NestedComponent) => {
  return class extends Component {
    render() {
      console.log(this.props);
      return <NestedComponent {...this.props} />;
    }
  };
};

export default withLogProps;

// const withLogProps = (NestedComponent) => {
//   return (props) => {
//     console.log(props);
//     return <NestedComponent {...props} />;
//   };
// };

// export default withLogProps;
