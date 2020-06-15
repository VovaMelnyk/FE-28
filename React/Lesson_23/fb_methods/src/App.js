import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { auth } from "./config";
import { useDispatch } from "react-redux";
import { setUserAction, deleteUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { email } = user;
        history.replace("/");
        dispatch(setUserAction({ email }));
      } else {
        history.replace("/login");
        dispatch(deleteUser());
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
