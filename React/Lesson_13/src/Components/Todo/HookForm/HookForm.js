import React, { useState } from "react";
import "./HookForm.css";

const formInitialState = {
  title: "",
  author: "",
  priority: "Low",
  agree: false,
};
const HookForm = ({ addTodo }) => {
  const [form, setForm] = useState(formInitialState);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { title, author, priority, agree } = form;
    if (!agree) {
      return;
    }
    const task = {
      title,
      author,
      priority,
      status: false,
      id: Date.now(),
    };
    addTodo(task);
    setForm(formInitialState);
  };
  const { title, author, priority, agree } = form;
  return (
    <form className="NewTodoForm" autoComplete="off" onSubmit={submitHandler}>
      <input
        className="NewTodoForm__name"
        type="text"
        name="title"
        placeholder="New Todo"
        autoFocus
        value={title}
        onChange={inputHandler}
      />
      <input
        className="NewTodoForm__name"
        type="text"
        name="author"
        placeholder="Author"
        autoFocus
        value={author}
        onChange={inputHandler}
      />
      <select
        name="priority"
        className="NewTodoForm__select"
        value={priority}
        onChange={inputHandler}
      >
        <option value="Priority" disabled hidden>
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <label htmlFor="agree" className="confirm">
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          name="agree"
          onChange={inputHandler}
        />{" "}
        Agree with our policy
      </label>
      <button className="NewTodoForm__submit" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default HookForm;
