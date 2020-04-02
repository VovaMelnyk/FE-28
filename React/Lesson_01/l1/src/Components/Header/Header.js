import React from "react";

const headerStyle = {
  minHeight: "60px",
  backgroundColor: "#000",
  color: "#fff"
};

const title = {
  color: "red"
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={title}> Shop Header</h1>
    </header>
  );
};

export default Header;
