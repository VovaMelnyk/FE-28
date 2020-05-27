import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { useSelector } from "react-redux";
import { isAuthSelector } from "./redux/selectors";

function App() {
  const isAuth = useSelector((state) => isAuthSelector(state));
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.replace("/");
    }
  }, [isAuth]);
  return (
    <>
      <Header />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
