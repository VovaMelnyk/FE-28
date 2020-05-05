import React, { Component } from "react";

class IsAuthUser extends Component {
  render() {
    const user = {}; // redux
    const isAuth = Object.keys(user).length > 0;
    return this.props.children({ isAuth, isAuth });
  }
}

export default IsAuthUser;
