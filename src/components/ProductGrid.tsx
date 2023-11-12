"use client";
import React from "react";
import Image from "next/image";
import { seedData } from "@/constants/seedData";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductGrid = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
      {seedData.map((product, i) => (
        <div
          className="card card-compact w-full bg-base-100 shadow-xl relative"
          key={i}
        >
          <figure className="h-48">
            <Image
              src={product.img}
              alt={`${product.name} product card`}
              width={300}
              height={200}
              className="object-cover w-full h-full"
              draggable="false"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title truncate">{product.name}</h2>
            <div className="flex justify-between">
              <p className="text-green-600 text-lg">${product.price}</p>
              <button
                className="bg-green-700 hover:bg-green-800 duration-200 text-white py-2 px-4 rounded-md"
                onClick={() => {
                  dispatch(addToCart(product)),
                    toast.success(`${product.name} added to cart`);
                }}
              >
                ADD +
              </button>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-red-600 text-white py-1 px-2 rounded-sm text-sm">
            {product.category}
          </div>
        </div>
      ))}
      <Toaster position="bottom-left" />
    </div>
  );
};

export default ProductGrid;
