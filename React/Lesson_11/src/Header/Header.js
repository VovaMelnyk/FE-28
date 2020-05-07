import React, { useContext } from "react";
import withProps from "../hoc/withLogProps";
import "./Header.css";
import ThemeContext from "../context/ThemeContext";

const Header = ({ title }) => {
  const { theme } = useContext(ThemeContext);
  return <h1 className={theme ? "title-dark" : "title"}>{title}</h1>;
};

export default withProps(Header);
