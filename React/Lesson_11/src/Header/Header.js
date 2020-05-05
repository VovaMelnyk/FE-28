import React from "react";
import withProps from "../hoc/withLogProps";
import "./Header.css";

const Header = ({ title }) => {
  return <h1 className="title">{title}</h1>;
};

export default withProps(Header);


