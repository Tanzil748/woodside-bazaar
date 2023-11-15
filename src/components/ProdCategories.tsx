import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ProdCategories = () => {
  const categories = [
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
            className="border-2 px-2 py-1 rounded-md hover:border-emerald-600 duration-200"
            onClick={() => {
              toast.error(`Category filter coming next application update!`);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <Toaster position="bottom-left" />
    </div>
  );
};

export default ProdCategories;
