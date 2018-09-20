import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCount }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">{totalCount}</span>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
