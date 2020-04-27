import React from "react";
import Note from "../Note/Note";
import Demo from "../Demo/Demo";

const About = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Github search</h1>
          <p className="lead">App version is 1.0.0</p>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="navbar-item nav-link">Realize Note</li>
          <li className="navbar-item nav-link">Demo</li>
        </ul>
      </nav>
      <Note />
      <Demo />
    </>
  );
};

export default About;
