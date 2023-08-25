import { useEffect, useState } from "react";
import { Product } from "../models/products";
import { ProductCard } from "./ProductCard";
import { getAllProducts } from "../services/productService";
import { useSearchParams } from "react-router-dom";
import { Filter } from "./Filter";
import React from "react";

// interface ProductListProps {
//   products: Product[];
// }

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const maxPrice =
      searchParams.get("max-price") !== null
        ? parseFloat(searchParams.get("max-price") as string)
        : null;

    const includes = searchParams.get("includes");

    const limit =
      searchParams.get("limit") !== null
        ? parseInt(searchParams.get("limit") as string)
        : null;

    getAllProducts(maxPrice, includes, limit).then((data) => {
      setProducts(data);
    });
  }, [searchParams]);

  return (
    <div className="ProductList">
      <Filter></Filter>
      <ul className="list">
        {products.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </ul>
    </div>
  );
};
