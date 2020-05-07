import React, { useContext } from "react";
import Blue from "../Blue/Blue";
import "./Red.css";
import SimpleContext from "../../context/simpleContext";
const Red = () => {
  const { number } = useContext(SimpleContext);
  return (
    <div className="red">
      <p>{number}</p>
      <Blue />
    </div>
  );
};

export default Red;
