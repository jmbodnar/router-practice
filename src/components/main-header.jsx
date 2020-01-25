import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="jumbotron mb-0">
      <h1 className="text-center">
        <Link to="/">‘Tis the Seasoning</Link>
      </h1>
    </header>
  );
};

export default Header;
