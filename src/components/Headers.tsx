import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";

export const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </header>
  );
};
