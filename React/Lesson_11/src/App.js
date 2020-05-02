import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import Form from "./Form/Form";

function App() {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    const newState = [...list, item];
    setList(newState);
  };

  const removeItem = (id) => {
    const newState = list.filter((todo) => todo.id !== id);
    setList(newState);
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
}

export default App;
