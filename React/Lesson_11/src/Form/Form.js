import React, { useState } from "react";
import "./Form.css";

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
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Enter task"
        onChange={inputChange}
        value={input}
      />
      <button className="save">Save item</button>
    </form>
  );
};

export default Form;
