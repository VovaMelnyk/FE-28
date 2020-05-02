import React, { useState } from "react";
import "./Form.css";
import IsAuthUser from "../renderProp/IsAuthUser";

const Form = ({ addItem }) => {
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      text: input,
    };
    addItem(task);
    setInput("");
  };

  return (
    <IsAuthUser
      render={(isAuthUser) => (
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter task"
            onChange={inputChange}
            value={input}
          />
          <button className="save" disabled={!isAuthUser}>
            Save item
          </button>
        </form>
      )}
    ></IsAuthUser>
  );
};

export default Form;
