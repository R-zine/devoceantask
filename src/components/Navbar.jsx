import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <Link to="/">
      <nav className="Navbar">
        <img src={logo} alt="logo" />
        <h3>logo</h3>
      </nav>
    </Link>
  );
};

export default Navbar;
