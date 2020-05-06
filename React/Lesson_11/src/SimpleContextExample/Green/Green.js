import React, { useContext } from "react";
import "./Green.css";
import SimpleContext from "../../context/simpleContext";

const Green = () => {
  const { number } = useContext(SimpleContext);
  return <div className="green">{number}</div>;
};

export default Green;
