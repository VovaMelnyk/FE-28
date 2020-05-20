import React, { useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";
import HookForm from "../HookForm/HookForm";
import { useSelector } from "react-redux";

const TodoList = () => {
  const [filter, setFilter] = useState("all");

  const filterTasks = (state) => {
    switch (filter) {
      case "all":
        return state;
      case "completed":
        return state.filter((todo) => todo.status === true);
      case "uncompleted":
        return state.filter((todo) => todo.status === false);
      default:
        break;
    }
  };

  const todoList = useSelector((state) => filterTasks(state.todo));

  const changeFilter = (e) => {
    setFilter(e.target.dataset.filter);
  };

  return (
    <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      <HookForm />
      <ul className="TodoList__todos">
        {todoList.length ? (
          todoList.map((todo, index) => (
            <li key={todo.id}>
              <Todo {...todo} index={index} />
            </li>
          ))
        ) : (
          <li>No tasks</li>
        )}
      </ul>
      <div className="filters">
        <button
          className="NewTodoForm__submit"
          data-filter="all"
          onClick={changeFilter}
        >
          All
        </button>
        <button
          className="NewTodoForm__submit"
          data-filter="completed"
          onClick={changeFilter}
        >
          Completed
        </button>
        <button
          className="NewTodoForm__submit"
          data-filter="uncompleted"
          onClick={changeFilter}
        >
          Uncompleted
        </button>
      </div>
    </div>
  );
};

export default TodoList;
