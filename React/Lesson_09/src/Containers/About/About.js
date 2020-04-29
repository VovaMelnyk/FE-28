import React from "react";
import {
  NavLink,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Note from "../Note/Note";
import Demo from "../Demo/Demo";

const About = (props) => {
  console.log("props", props);
  // console.log("useHistory", useHistory());
  // console.log("useLocation", useLocation());
  // console.log("useParams", useParams());
  // console.log("useRouteMatch", useRouteMatch());
  const path = useRouteMatch().path;

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{props.title}</h1>
          <p className="lead">App version is 1.0.0</p>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavLink to={`${props.match.path}/notes`} className="nav-link">
              Realize Note
            </NavLink>
          </li>
          <li className="navbar-item ">
            <NavLink to={`${path}/demo`} className="nav-link">
              Demo
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${props.match.path}/notes`} component={Note} />
        <Route path={`${path}/demo`} component={Demo} />
      </Switch>
    </>
  );
};

export default About;
