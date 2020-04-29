import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Profile from "./Containers/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} /> */}
          <Route
            path="/about"
            render={(props) => <About {...props} title="Github search" />}
          />
          <Route path="/profile/:login" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;
