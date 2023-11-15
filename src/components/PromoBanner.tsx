"use client";
import React, { RefObject } from "react";
import Image from "next/image";
import Link from "next/link";

const PromoBanner = ({ gridRef }: { gridRef: RefObject<HTMLDivElement> }) => {
  const scrollToSection = (selected: React.RefObject<HTMLDivElement>) => {
    if (selected.current) {
      window.scrollTo({
        top: selected.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <h1 className="font-semibold mb-4 text-2xl">Special Offers</h1>
      <div className="flex justify-center gap-4 h-80">
        <div className="relative">
          <Image
            src="/promoLeft.jpg"
            alt="big promo"
            width={600}
            height={100}
            className="rounded-md h-full brightness-75"
            draggable="false"
            priority={true}
          />
          {/* absolute text */}
          <div className="absolute top-14 left-10 text-white">
            <div>
              <h1 className="text-5xl font-semibold mb-1">Winter Sale!!!</h1>
              <h5 className="">
                Checkout deals on a variety of fresh produce, spices, baked
                goods and more!
              </h5>
              <p className="italic mb-2">
                **Up to <span className="font-bold">50% OFF</span> on select
                items**
              </p>
              <Link href="#">
                <button
                  className="bg-red-700 hover:bg-red-800 duration-200 px-2 py-1 rounded-sm"
                  onClick={() => scrollToSection(gridRef)}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/promoRight.jpg"
            alt="small promo"
            width={500}
            height={100}
            className="rounded-md h-full brightness-75"
            draggable="false"
            priority={true}
          />
          {/* absolute text */}
          <div className="absolute top-14 left-10 text-white">
            <div>
              <h1 className="text-4xl font-semibold mb-2">Discount Up To</h1>
              <h5 className="text-7xl fw-extrabold mb-2">50%</h5>
              <p className="mb-2">All Sweets and Beverages</p>
              <button
                className="text-sm underline"
                onClick={() => scrollToSection(gridRef)}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
