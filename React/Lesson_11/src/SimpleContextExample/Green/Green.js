import React from "react";
import "./Green.css";
import SimpleContext from "../../context/simpleContext";
const Green = () => {
  return (
    <SimpleContext.Consumer>
      {({ number }) => <div className="green">{number}</div>}
    </SimpleContext.Consumer>
  );
};

export default Green;
