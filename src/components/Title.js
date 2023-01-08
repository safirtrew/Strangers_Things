import React from "react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div className="p-5 bg-light mb-4">
      <h1 className="">Welcome to Stranger's Things</h1>
      <nav className="d-flex">
        <h4 className="mb-0">
          <Link to="/Login">Login</Link>
          <span>|</span>
          <Link to="/Register">Register</Link>
        </h4>
      </nav>
    </div>
  );
}
