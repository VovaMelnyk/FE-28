import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Profile from "./Containers/Profile/Profile";
import Alert from "./Components/Alert/Alert";
import AlertState from "./Context/Alert/alertState";
import { GithubState } from "./Context/github/githubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <Navbar />
        <div className="container pt-4">
          <Alert text="Test alert" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:name" component={Profile} />
          </Switch>
        </div>
      </AlertState>
    </GithubState>
  );
}

export default App;
