import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxPrice, setMaxPrice] = useState(20);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchParams((prev) => ({ ...prev, "max-price": maxPrice }));
      }}
    >
      <label htmlFor="max-price">Max price: {maxPrice}</label>
      <input
        type="range"
        name="max-price"
        id="price"
        min={0}
        max={200}
        onChange={(e) => {
          setMaxPrice(parseInt(e.target.value));
        }}
        value={maxPrice}
      />
      <button>Submit</button>
    </form>
  );
};
