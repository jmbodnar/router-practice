import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="jumbotron text-center mb-0">
      <h1 className="display-4">
        <Link to="/">‘Tis the Seasoning</Link>
      </h1>
      <p className="container my-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        voluptatum quidem harum.
      </p>
    </header>
  );
};

export default Header;
