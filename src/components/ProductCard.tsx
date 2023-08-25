import React from "react";
import { Product } from "../models/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className="ProductCard">
      <p>{product.name}</p>
      <p>{product.price}</p>
      <img src={product.photoURL} alt="" style={{ width: "100px" }} />
    </li>
  );
};
