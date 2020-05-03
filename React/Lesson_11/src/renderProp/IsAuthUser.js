import React, { Component } from "react";

// const IsAuthUser = ({ children }) => {
//   const user = { name: "Bob", age: 22, gender: "male" };
//   const isAuth = Object.keys(user).length > 0;
//   return children({ isAuth });
// };

// export default IsAuthUser;

class IsAuthUser extends Component {
  render() {
    const user = { name: "Bob", age: 22, gender: "male" };
    const isAuth = Object.keys(user).length > 0;
    console.log(isAuth);
    return this.props.children({ isAuth });
  }
}

export default IsAuthUser;
