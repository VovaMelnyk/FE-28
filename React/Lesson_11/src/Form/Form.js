import React, { useState } from "react";
import withAuth from "../hoc/withUserAuth";
import withStorage from "../hoc/withStorage";
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
    const task = {
      id: Date.now(),
      text: input,
    };
    addItem(task);
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
          <button className="save" disabled={!isAuth}>
            Save item
          </button>
        </form>
      )}
    </IsAuthUser>
  );
};

export default Form;

// export default withStorage(withAuth(Form));
