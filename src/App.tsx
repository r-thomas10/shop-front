import { useEffect, useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { Product } from "./models/products";
import { getAllProducts } from "./services/productService";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Headers";
import { ProductDetails } from "./components/ProductDetails";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
