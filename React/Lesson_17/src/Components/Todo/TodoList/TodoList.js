import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";
import HookForm from "../HookForm/HookForm";
import { useSelector, useDispatch } from "react-redux";
import {
  totalTodoCount,
  todoSelector,
  hightTodoCount,
  mediumTodoCount,
  lowTodoCount,
  todoSelectorWithTypes,
} from "../../../redux/selectors";

import {
  setAll,
  setComplete,
  setUncompleted,
} from "../../../redux/actions/type";

const TodoList = () => {
  // const todoList = useSelector((state) => todoSelector(state));
  const todoList = useSelector((state) => todoSelectorWithTypes(state));

  const total = useSelector((state) => totalTodoCount(state));
  const hightPriorityTotal = useSelector((state) => hightTodoCount(state));
  const mediumPriorityTotal = useSelector((state) => mediumTodoCount(state));
  const lowPriorityTotal = useSelector((state) => lowTodoCount(state));

  const dispatch = useDispatch();

  const setAllTodo = () => dispatch(setAll());
  const setCompleteTodo = () => dispatch(setComplete());
  const setUncompletedTodo = () => dispatch(setUncompleted());

  return (
    <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      <div className="total">
        <p>Total: {total} </p>
        <p>Hight: {hightPriorityTotal}</p>
        <p>Medium: {mediumPriorityTotal}</p>
        <p>Low: {lowPriorityTotal}</p>
      </div>
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
          onClick={setAllTodo}
        >
          All
        </button>
        <button
          className="NewTodoForm__submit"
          data-filter="completed"
          onClick={setCompleteTodo}
        >
          Completed
        </button>
        <button
          className="NewTodoForm__submit"
          data-filter="uncompleted"
          onClick={setUncompletedTodo}
        >
          Uncompleted
        </button>
      </div>
    </div>
  );
};

export default TodoList;
