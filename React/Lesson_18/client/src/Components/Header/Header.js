import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { isAuth } from "../../redux/selectors";
const Header = () => {
  const isAuthUser = useSelector((state) => isAuth(state));
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {isAuthUser ? (
            <button className="btn btn-primary ml-auto">Log Out</button>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>
                  Sign up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
