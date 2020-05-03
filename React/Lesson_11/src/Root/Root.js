import React, { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import ThemeContext from "../context/ThemeContext";
import "./Root.css";
const Root = () => {
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
    <ThemeContext.Consumer>
      {(context) => (
        <div className={context.light ? "App" : "App-dark"}>
          <div className={context.light ? 'container': 'container-dark'}>
            <Header title="Todo" context={context} />
            <Form addItem={addItem} />
            <TodoList list={list} removeItem={removeItem} />
            <button className="switch" onClick={context.switchTheme}>
              Switch
            </button>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Root;
