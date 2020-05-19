import React, { Component } from "react";
import Counter from "./Components/Counter/Counter";
import TodoList from './Components/Todo/TodoList/TodoList'
import "./App.css";

class App extends Component {

  render() {
    return (
      <>
        <Counter/>
        {/* <TodoList/> */}
      </>
    );
  }
}

export default App;
