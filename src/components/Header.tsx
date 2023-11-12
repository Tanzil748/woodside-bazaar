"use client";
import React, { useEffect } from "react";
import {
  LocalPhone,
  AccountCircle,
  Search,
  ReceiptLong,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { StateProp } from "../../type";

const Header = () => {
  // user data is stored in session
  const { data: session } = useSession();
  const { productData } = useSelector((state: StateProp) => state.cart);
  console.log(productData);

  // handles productData changes & displays in UI
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
        <Link href="/" className="flex gap-1 items-center mr-auto">
          <Image
            src="/logo.png"
            alt="Woodside Bazaar Logo"
            width={33}
            height={30}
          ></Image>
          <div className="font-semibold text-xl">
            <span className="text-green-700">Woodside</span> Bazaar
          </div>
        </Link>

        <div className="gap-x-3">
          {/* search field */}
          <div className="w-96 hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-sm px-4 py-1.5 focus-within:border-[#035803]">
            <Search className="text-gray-500 duration-200" />
            <input
              type="text"
              placeholder="Search for products"
              className="placeholder:text-sm flex-1 outline-none"
            />
          </div>

          {/* order button */}
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Link
              href="/order"
              className="indicator tooltip"
              data-tip="My Orders"
            >
              <ReceiptLong />
            </Link>
          </label>

          {/* Cart button */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <Link
                href="/cart"
                className="indicator tooltip"
                data-tip="My Cart"
              >
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
                <span className="badge badge-sm indicator-item bg-red-500 text-white">
                  {productData ? productData?.length : 0}
                </span>
              </Link>
            </label>
          </div>

          {/* Account Dropdown */}
          <div className="dropdown dropdown-end">
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
