import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { auth } from "./config";

function App() {
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/");
      } else {
        history.push("/login");
      }
    });
  }, []);
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
