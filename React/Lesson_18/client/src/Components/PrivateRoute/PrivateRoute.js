import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/selectors";

const PrivateRoute = ({ component, ...rest }) => {
  const isAuth = useSelector((state) => isAuthSelector(state));
  const Component = component;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
