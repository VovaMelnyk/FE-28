import React from "react";

const withUserAuth = (NestedComponent) => {
  const user = { name: "Bob", age: 23, gender: "male" };
  const isAuth = Object.keys(user).length > 0;
  return (props) => <NestedComponent isAuth={isAuth} {...props} />;
};

export default withUserAuth;
