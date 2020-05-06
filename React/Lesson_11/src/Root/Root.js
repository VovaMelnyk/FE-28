import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import withStorage from "../hoc/withStorage";
import TodoContext from "../todoGlobal/todoContext";
import "./Root.css";
const Root = () => {
  const { state, addTask, deleteTask } = useContext(TodoContext);

  return (
    <div className="App">
      <div className="container">
        <Header title="Todo" />
        <Form addItem={addTask} />
        <TodoList list={state} removeItem={deleteTask} />
        <button className="switch">Switch</button>
      </div>
    </div>
  );
};

export default withStorage(Root);
