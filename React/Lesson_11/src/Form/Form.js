import React, { useState } from "react";
import IsAuthUser from "../renderProp/IsAuthUser";
import "./Form.css";

const Form = ({ addItem, isAuth }) => {
  console.log("Form -> isAuth", isAuth);
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(input);
    setInput("");
  };

  return (
    <IsAuthUser>
      {({ isAuth }) => (
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter task"
            onChange={inputChange}
            value={input}
          />
          <button className="save">
            Save item
          </button>
        </form>
      )}
    </IsAuthUser>
  );
};

export default Form;

// export default withStorage(withAuth(Form));
