import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/selectors";

const PrivateRoute = ({ component, ...rest }) => {
  const Page = component;
  const isAuthUser = useSelector((state) => isAuth(state));

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthUser ? <Page {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
