import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const TodoList = ({ list, removeItem }) => {
  return (
    // <TransitionGroup component="ul" className="list">
    <ul className="list">
      {list.map((todo) => (
        // <CSSTransition key={todo.id} classNames="list__item" timeout={800}>
        <TodoItem {...todo} removeItem={removeItem} />
        // </CSSTransition>
      ))}
    </ul>
    // </TransitionGroup>
  );
};

export default TodoList;
