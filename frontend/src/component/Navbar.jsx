import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav">
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/bloglist">
          Bloglist
        </Link>
        <Link className="nav-link" to="/blogcreate">
          Blogcreate
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link signup" to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
