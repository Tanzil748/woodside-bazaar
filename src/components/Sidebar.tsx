"use client";
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

const Sidebar = () => {
  let stores = [
    "Walmart",
    "Costco",
    "Aldi",
    "Trader Joe",
    "Walgreen",
    "Food Bazaar",
  ];

  let priceRange = ["$0 - $10", "$11 - $20", "$21 - $30", "$31 - No Limit"];

  return (
    <div className="bg-[#207020] text-gray-100 p-3 rounded-md min-h-[80vh] flex flex-col sticky top-4">
      <h2 className="flex justify-between">
        <div className="flex items-center text-lg font-medium gap-2">
          <FilterListIcon /> Filter
        </div>
        <button className="text-xs underline">Reset Filter</button>
      </h2>

      {/* store filter */}
      <h2 className="text-sm mt-4 font-medium mb-1">Store</h2>
      {stores.map((store, i) => (
        <div className="form-control" key={i}>
          <label className="cursor-pointer flex items-center gap-2 mb-1">
            <input type="checkbox" checked={true} className="checkbox" />
            <span className="text-sm text-gray-200">{store}</span>
          </label>
        </div>
      ))}

      {/* price filter */}
      <h2 className="text-sm mt-4 font-medium mb-1">Price</h2>
      {priceRange.map((price, i) => (
        <div className="form-control" key={i}>
          <label className="cursor-pointer flex items-center gap-2 mb-1">
            <input type="checkbox" checked={true} className="checkbox" />
            <span className="text-sm text-gray-200">{price}</span>
          </label>
        </div>
      ))}

      {/* copyright end */}
      <p className="text-xs mt-auto">© Woodside Bazaar</p>
    </div>
  );
};

export default Sidebar;
