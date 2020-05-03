import React from "react";
import SimpleContext from "../../context/simpleContext";
import "./Blue.css";
import Green from "../Green/Green";
const Blue = () => {
  return (
    <SimpleContext.Consumer>
      {(context) => (
        <div className="blue">
          <button onClick={context.increment}>Increment</button>
          <Green />
        </div>
      )}
    </SimpleContext.Consumer>
  );
};

export default Blue;
