import React from "react";
import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      <Form />
      <ul className="TodoList__todos">
        <li>
          <Todo done />
        </li>
        <li>
          <Todo />
        </li>
      </ul>
      <div className="filters">
        <button className="NewTodoForm__submit">All</button>
        <button className="NewTodoForm__submit">Completed</button>
        <button className="NewTodoForm__submit">Uncompleted</button>
      </div>
    </div>
  );
};

export default TodoList;
