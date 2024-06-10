import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div id="navigation">
      <h1>Navigation</h1>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/products">Products</Link>
        <br></br>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
