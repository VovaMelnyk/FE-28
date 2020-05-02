import React from "react";

const IsAuthUser = (props) => {
  const user = { name: "bob", age: 24, gender: "male" };
  const isAuthUser = Object.keys(user).length > 0;
  return <>{props.render({ isAuthUser })}</>;
};

export default IsAuthUser;
