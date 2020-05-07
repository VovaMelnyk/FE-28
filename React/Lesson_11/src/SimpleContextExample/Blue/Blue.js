import React, { useContext } from "react";
import "./Blue.css";
import Green from "../Green/Green";
import SimpleContext from "../../context/simpleContext";
const Blue = () => {
  const { increment } = useContext(SimpleContext);
  return (
    <div className="blue">
      <button onClick={increment}>Increment</button>
      <Green />
    </div>
  );
};

export default Blue;
