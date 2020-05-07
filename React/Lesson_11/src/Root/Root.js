import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import withStorage from "../hoc/withStorage";
import ThemeContext from "../context/ThemeContext";
import { CSSTransition } from "react-transition-group";
import "./Root.css";
const Root = ({ saveToStorage }) => {
  const { theme, switchTheme } = useContext(ThemeContext);
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
    <div className={theme ? "App-dark" : "App"}>
      <div className={theme ? "container-dark" : "container"}>
        <Header title="Todo" />
        <Form addItem={addItem} />
        <TodoList list={list} removeItem={removeItem} />
        <button className="switch" onClick={switchTheme}>
          Switch
        </button>
      </div>
      {/* {alert && <div className="alert">Alert</div>} */}
      <div className="anim">
        <button onClick={toggleAlert}>Show Alert</button>
        <CSSTransition
          in={alert}
          classNames="alert"
          timeout={{
            enter: 500,
            exit: 350,
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className="alert">Alert</div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default withStorage(Root);
