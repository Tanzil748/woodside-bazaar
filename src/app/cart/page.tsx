"use client";
import React, { useState, useEffect } from "react";
import "../../css/cart.css";
import Image from "next/image";
import Link from "next/link";
import { ProductType, StateProp } from "../../../type";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
  saveUserCart,
  resetCart,
} from "@/redux/cartSlice";
import {
  Add,
  Remove,
  DirectionsCarFilled,
  AttachMoney,
  CreditCard,
  Error,
} from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { productData, userInfo } = useSelector(
    (state: StateProp) => state.cart
  );

  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalAmount = 0;
    productData.forEach((product: ProductType) => {
      totalAmount += product.price * product.quantity;
    });
    setTotal(totalAmount);
  }, [productData]);

  // stripe
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const { data: session } = useSession();
  const checkoutHandler = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: productData,
        email: session?.user?.email,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      await dispatch(saveUserCart({ order: productData, id: data.id }));
      stripe?.redirectToCheckout({ sessionId: data.id });
      dispatch(resetCart());
    } else {
      throw new Error("Failed to create stripe payment");
    }
  };

  return (
    <div id="cart-page" className="mx-auto min-h-[90vh] my-2.5 relative">
      {productData?.length === 0 ? (
        // empty cart page
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="shadow-xl w-screen sm:w-[30rem] h-96 rounded-md flex flex-col justify-center items-center gap-y-4 text-center">
            <Error className="text-red-800" style={{ fontSize: "3rem" }} />
            <h1 className="font-extrabold text-xl">
              Your cart is currently empty.
            </h1>
            <p className="text-sm">
              Search though our trending categories for the best deals!
            </p>
            <p className="text-sm font-semibold">
              If you have any questions feel free to contact us.
            </p>
            <p className="font-semibold mt-2">
              <span className="text-green-700">Woodside</span> Bazaar
            </p>

            <hr />

            <div className="flex items-end gap-2">
              <Link href={"/"}>
                <button className="text-base font-semibold bg-rose-800 hover:bg-rose-900 duration-200 text-white py-1 px-2 rounded-sm mt-2">
                  Head back to shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div id="cart-menu">
            <h1 className="font-semibold mb-4 text-2xl">Your Cart</h1>
            <div className="bg-[#207020] text-gray-100 py-2 px-4 rounded-sm">
              {`Shipping Items (${productData.length})`}
            </div>
            <div>
              {productData.map((product: ProductType, i) => (
                <div key={i}>
                  <div className="flex items-center px-4">
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
                      <div>
                        <div className="font-semibold text-lg">
                          {product.name}
                        </div>
                        <div className="text-sm">{product.category}</div>
                        <button
                          className="text-xs text-red-600"
                          onClick={() => {
                            dispatch(removeFromCart(product)),
                              toast.error(`${product.name} removed from cart`);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* right container */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end w-full sm:w-1/2">
                      {/* toggle quantity */}
                      <div className="flex items-center border-2 border-gray-300/50 rounded-md gap-x-2 py-1">
                        <button
                          onClick={() => {
                            dispatch(decreaseFromCart(product)),
                              toast.error(`Deleted 1 ${product.name}`);
                          }}
                        >
                          <Remove />
                        </button>
                        <div className="font-semibold">{product.quantity}</div>
                        <button
                          onClick={() => {
                            dispatch(addToCart(product)),
                              toast.success(`Added 1 ${product.name}`);
                          }}
                        >
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
                </div>
              ))}
            </div>
          </div>
          <div id="cart-ad">
            <div className="bg-gray-200/50 py-3 px-1 flex flex-wrap items-center justify-between gap-4 rounded-sm">
              {/* free shipping */}
              <div className="flex flex-1">
                <DirectionsCarFilled className="text-green-800 mr-2" />
                <div className="">
                  <p className="font-semibold text-sm">
                    FREE SHIPPING AND RETURN
                  </p>
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
                  <p className="text-xs text-gray-500">
                    We always make it right!
                  </p>
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
                <div>${total.toFixed(2)}</div>
              </div>

              {/* Estimated shipping */}
              <div className="flex justify-between">
                <div>Estimated Shipping</div>
                <div className="text-emerald-700">Free</div>
              </div>

              {/* sales tax */}
              <div className="flex justify-between">
                <div>Sales Tax</div>
                <div>$0.00</div>
              </div>
              <hr className="my-4" />

              <div className="flex justify-between">
                <div>Order Total</div>
                <div>${total.toFixed(2)}</div>
              </div>
              {userInfo ? (
                <button
                  className="bg-green-800 hover:bg-green-900 duration-200 text-white w-full py-1 rounded-sm mt-auto font-semibold mb-2"
                  onClick={() => checkoutHandler()}
                >
                  CHECKOUT
                </button>
              ) : (
                <button className="bg-red-800 hover:bg-red-900 duration-200 text-white w-full py-1 rounded-sm mt-auto font-semibold mb-2 cursor-not-allowed flex justify-center items-center gap-2">
                  <Error />
                  Login to Checkout
                </button>
              )}
            </div>
          </div>
        </>
      )}
      <Toaster position="bottom-left" />
    </div>
  );
};

export default Cart;
