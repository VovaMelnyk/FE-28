import React, { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
const Root = ({ save }) => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    const newState = [...list, item];
    setList(newState);
    save("list", newState);
  };

  const removeItem = (id) => {
    const newState = list.filter((todo) => todo.id !== id);
    setList(newState);
    save("list", newState);
  };

  return (
    <div className="App">
      <div className="container">
        <Header title="Todo" />
        <Form addItem={addItem} />
        <TodoList list={list} removeItem={removeItem} />
      </div>
    </div>
  );
};

export default Root;
