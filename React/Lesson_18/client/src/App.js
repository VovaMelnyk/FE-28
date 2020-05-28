import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import { isAuth } from "./redux/selectors";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  const isAuthUser = useSelector((state) => isAuth(state));
  const history = useHistory();

  useEffect(() => {
    if (isAuthUser) {
      history.replace("/");
    }
  }, [isAuthUser]);

  return (
    <>
      <Header />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
