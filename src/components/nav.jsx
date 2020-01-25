import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top mb-4">
      <div className="container collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/recipes" className="nav-link">
              Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
