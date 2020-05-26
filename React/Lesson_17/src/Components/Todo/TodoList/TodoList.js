import React, { useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";
import HookForm from "../HookForm/HookForm";
import { useSelector, useDispatch } from "react-redux";
import {
  todoTotalCount,
  todoHighCount,
  todoMediumCount,
  todoLowCount,
  todoFilterSelector,
} from "../../../redux/selectors";

import {
  setAll,
  setComplete,
  setUncompleted,
} from "../../../redux/actions/fileter";

const TodoList = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => todoFilterSelector(state));

  const total = useSelector((state) => todoTotalCount(state));
  const highTotal = useSelector((state) => todoHighCount(state));
  const mediumTotal = useSelector((state) => todoMediumCount(state));
  const lowTotal = useSelector((state) => todoLowCount(state));

  return (
    <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      <p>Total: {total}</p>
      <p>High:{highTotal}</p>
      <p>Medium:{mediumTotal}</p>
      <p>Low: {lowTotal}</p>
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
          onClick={() => dispatch(setAll())}
        >
          All
        </button>
        <button
          className="NewTodoForm__submit"
          onClick={() => dispatch(setComplete())}
        >
          Completed
        </button>
        <button
          className="NewTodoForm__submit"
          onClick={() => dispatch(setUncompleted())}
        >
          Uncompleted
        </button>
      </div>
    </div>
  );
};

export default TodoList;
