"use client";
import React from "react";
import { useSelector } from "react-redux";
import { ProductType, StateProp } from "../../../type";
import "../../css/cart.css";
import Image from "next/image";
import {
  Add,
  Remove,
  DirectionsCarFilled,
  AttachMoney,
  CreditCard,
} from "@mui/icons-material";

const Cart = () => {
  // const productData = useSelector((state: StateProp) => state.cart.productData);
  const { productData } = useSelector((state: StateProp) => state.cart);
  console.log(productData);
  return (
    <div id="cart-page" className="max-w-[1400px] mx-auto min-h-[90vh] my-2.5">
      {/* {productData?.length === 0 ? (
        <div>empty</div>
      ) : (
        <div>cart filled</div>
      )} */}
      <div id="cart-menu">
        <h1 className="font-semibold mb-4 text-2xl">Your Cart</h1>
        <div className="bg-[#207020] text-gray-100 py-2 px-4 rounded-sm">
          Shipping Items (2 Items)
        </div>
        <div>
          {productData.map((product: ProductType, i) => (
            <>
              <div key={i} className="flex items-center px-4">
                {/* left container */}
                <div className="mr-auto flex justify-center sm:justify-start items-center w-full sm:w-1/2">
                  {/* picture */}
                  <div className="mr-2">
                    <Image
                      src={product.img}
                      alt={`${product.name} image`}
                      width={150}
                      height={150}
                      className="w-36 h-36 object-cover"
                      draggable="false"
                    ></Image>
                  </div>

                  {/* title / category / remove btn */}
                  <div className="">
                    <div className="font-semibold text-lg">{product.name}</div>
                    <div className="text-sm">{product.category}</div>
                    <button className="text-xs text-red-600">Remove</button>
                  </div>
                </div>

                {/* right container */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end w-full sm:w-1/2">
                  {/* toggle quantity */}
                  <div className="flex items-center border-2 border-gray-300/50 rounded-md gap-x-2 py-1">
                    <button>
                      <Remove />
                    </button>
                    <div className="font-semibold">1</div>
                    <button>
                      <Add />
                    </button>
                  </div>

                  {/* price */}
                  <div className="font-semibold text-lg ml-4">
                    ${product.price}
                  </div>
                </div>
              </div>
              <hr className="my-4" />
            </>
          ))}
        </div>
      </div>
      <div id="cart-ad">
        <div className="bg-gray-200/50 py-3 px-1 flex flex-wrap items-center justify-between gap-4 rounded-sm">
          {/* free shipping */}
          <div className="flex flex-1">
            <DirectionsCarFilled className="text-green-800 mr-2" />
            <div className="">
              <p className="font-semibold text-sm">FREE SHIPPING AND RETURN</p>
              <p className="text-xs text-gray-500">
                All orders above $20 bucks get free shipping
              </p>
            </div>
          </div>

          {/* money back */}
          <div className="flex flex-1">
            <AttachMoney className="text-green-800 mr-2" />
            <div className="">
              <p className="font-semibold text-sm">MONEY BACK GUARANTEE</p>
              <p className="text-xs text-gray-500">We always make it right!</p>
            </div>
          </div>

          {/* online orders */}
          <div className="flex flex-1">
            <CreditCard className="text-green-800 mr-2" />
            <div className="">
              <p className="font-semibold text-sm">ONLINE ORDERS</p>
              <p className="text-xs text-gray-500">
                Place orders from the ease of your home
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="detail-side">
        <div className="shadow-lg py-2 px-4 min-h-[50vh] sticky top-4 rounded-md leading-10 flex flex-col">
          <h1 className="font-semibold mb-4 text-xl mt-2">Summary</h1>
          <hr />
          {/* subtotal */}
          <div className="flex justify-between mt-4">
            <div>Subtotal</div>
            <div>$799.00</div>
          </div>

          {/* Estimated shipping */}
          <div className="flex justify-between">
            <div>Estimated Shipping</div>
            <div>Free</div>
          </div>

          {/* sales tax */}
          <div className="flex justify-between">
            <div>Sales Tax</div>
            <div>$63.22</div>
          </div>
          <hr className="my-4" />

          <div className="flex justify-between">
            <div>Order Total</div>
            <div>$123.21</div>
          </div>

          <button className="bg-green-800 hover:bg-green-900 duration-200 text-white w-full py-1 rounded-sm mt-auto font-semibold mb-2">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
