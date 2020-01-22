import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>
        <Link to="/">‘Tis the Seasoning</Link>
      </h3>
      <ul>
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
