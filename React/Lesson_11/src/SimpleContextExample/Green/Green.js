import React from "react";
import SimpleContext from "../../context/simpleContext";
import "./Green.css";
const Green = () => {
  return (
    <SimpleContext.Consumer>
      {(context) => <div className="green">{context.number}</div>}
    </SimpleContext.Consumer>
  );
};

export default Green;
