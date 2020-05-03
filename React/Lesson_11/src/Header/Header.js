import React from "react";
import "./Header.css";
import ThemeContext from "../context/ThemeContext";
const Header = ({ title }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <h1 className={context.light ? "title" : "title-dark"}>{title}</h1>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
