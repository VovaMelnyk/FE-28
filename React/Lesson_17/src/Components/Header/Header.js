import React from "react";
import { connect, useSelector } from "react-redux";
import "./Header.css";
const Header = () => {
  console.log('render header');
  return (
    <header>
      <div className="user-info">
        <p>User name:</p>
        <p>User country:</p>
        <p>User status:</p>
      </div>
    </header>
  );
};

export default Header;
