import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Nav</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/users">Users</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
