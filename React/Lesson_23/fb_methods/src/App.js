import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registration" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
