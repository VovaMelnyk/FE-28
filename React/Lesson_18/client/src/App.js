import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
