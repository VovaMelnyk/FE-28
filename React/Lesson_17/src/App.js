import React, { Component } from "react";
import TodoList from "./Components/Todo/TodoList/TodoList";
import "./App.css";
import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <TodoList />
      </>
    );
  }
}

export default App;
