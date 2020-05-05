import React, { Component } from "react";

const withAuth = (NestedComponent) => {
  return class extends Component {
    render() {
      const user = {}; // redux
      const isAuth = Object.keys(user).length > 0;
      return <NestedComponent {...this.props} isAuth={isAuth} />;
    }
  };
};

export default withAuth;

// const withAuth = (NestedComponent) => {
//   const user = { name: "bob", age: 21, gender: "male" }; // redux
//   const isAuth = Object.keys(user).length > 0;
//   return (props) => <NestedComponent {...props} isAuth={isAuth} />;
// };

// export default withAuth;
