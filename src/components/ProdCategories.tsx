"use client";
import React from "react";

const ProdCategories = () => {
  let categories = [
    "All Products",
    "Fruit",
    "Vegetable",
    "Beverage",
    "Sweet",
    "Spice",
  ];
  return (
    <div>
      <h1 className="font-semibold mb-2 text-2xl">Best Seller</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category, i) => (
          <button
            key={i}
            className="border-2 px-2 py-1 rounded-md hover:border-emerald-500 active:border-emerald-600 duration-200"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProdCategories;
