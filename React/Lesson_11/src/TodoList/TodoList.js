import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const TodoList = ({ list, removeItem }) => {
  return (
    // <ul className="list">
    <TransitionGroup component="ul" className="list">
      {list.map((todo) => (
        <CSSTransition key={todo.id} classNames="list__item" timeout={800}>
          <TodoItem {...todo} removeItem={removeItem} />
        </CSSTransition>
      ))}
    </TransitionGroup>
    // </ul>
  );
};

export default TodoList;
