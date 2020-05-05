import React, { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import withStorage from "../hoc/withStorage";
import "./Root.css";
const Root = ({ saveToStorage }) => {
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);

  const addItem = (item) => {
    const newState = [...list, item];
    setList(newState);
    saveToStorage("list", newState);
  };

  const toggleAlert = () => {
    setAlert(!alert);
  };

  const removeItem = (id) => {
    const newState = list.filter((todo) => todo.id !== id);
    setList(newState);
    saveToStorage("list", newState);
  };

  return (
    <div className="App">
      <div className="container">
        <Header title="Todo" />
        <Form addItem={addItem} />
        <TodoList list={list} removeItem={removeItem} />
        <button className="switch">Switch</button>
      </div>
      {/* <div className="anim">
        <button onClick={toggleAlert}>Show Alert</button>
        <div className="alert">Alert</div>
      </div> */}
    </div>
  );
};

export default withStorage(Root);
