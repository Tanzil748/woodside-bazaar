"use client";
import React, { useEffect } from "react";
import {
  LocalPhone,
  AccountCircle,
  Search,
  ReceiptLong,
} from "@mui/icons-material";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { StateProp } from "../../type";
import { addUser, deleteUser } from "@/redux/cartSlice";

const Header = () => {
  // user data is stored in session
  const { data: session } = useSession();
  const { productData, orderData } = useSelector(
    (state: StateProp) => state.cart
  );
  // console.log(orderData);
  const dispatch = useDispatch();

  // upon logging in/out, this hook sends the userInfo data to redux toolkit
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);

  // handles productData changes & displays in UI [for cart counter]
  useEffect(() => {
    console.log(productData);
  }, [productData]);

  return (
    <>
      {/* nav banner */}
      <div className="py-2 w-full bg-[#035803]">
        <div className="2xl:container mx-auto flex justify-between items-center text-xs text-white px-2">
          <p>Extra Savings For New Customers!</p>
          <p>
            <LocalPhone fontSize="small" /> 1-800-FOOD
          </p>
        </div>
      </div>
      <div className="navbar bg-base-100 2xl:container mx-auto">
        {/* logo */}
        <Link href="/" className="ml-2 sm:ml-4 mr-auto">
          <div className="font-semibold text-md sm:text-xl">
            <span className="text-green-700">Woodside</span> Bazaar
          </div>
        </Link>

        <div className="gap-x-3">
          {/* search field - FUTURE FEATURE */}
          {/* <div className="w-96 hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-sm px-4 py-1.5 focus-within:border-[#035803]">
            <Search className="text-gray-500 duration-200" />
            <input
              type="text"
              placeholder="Search for products"
              className="placeholder:text-sm flex-1 outline-none"
            />
          </div> */}

          {/* order button */}
          <Link
            href="/order"
            className="indicator tooltip"
            data-tip="My Orders"
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <ReceiptLong />
            </label>
          </Link>

          {/* Cart button */}
          <Link href="/cart" className="indicator tooltip" data-tip="My Cart">
            <label tabIndex={0} className="btn btn-ghost btn-circle relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-1 right-0 badge badge-sm bg-red-500 text-white">
                {productData ? productData?.length : 0}
              </span>
            </label>
          </Link>

          {/* Account Dropdown */}
          <div
            className="dropdown dropdown-end indicator tooltip"
            data-tip="Account"
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <AccountCircle />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {!session ? (
                <>
                  <li>
                    <button onClick={() => signIn()}>Login</button>
                  </li>
                </>
              ) : (
                <li>
                  <button onClick={() => signOut()}>Log Out</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
