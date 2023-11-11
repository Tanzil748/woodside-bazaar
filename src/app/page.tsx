"use client";
import { MutableRefObject, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import ProdCategories from "@/components/ProdCategories";
import ProductGrid from "@/components/ProductGrid";
import Image from "next/image";
import Link from "next/link";
import "../css/home.css";

export default function Home() {
  const gridRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const scrollToSection = (
    selected: MutableRefObject<HTMLDivElement | null>
  ) => {
    if (selected.current) {
      window.scrollTo({
        top: selected.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <main id="home-page">
      {/* sidebar */}
      <div id="side-filter">
        <Sidebar />
      </div>

      {/* promo banner  */}
      <div id="prod-banner" className="w-full">
        <h1 className="font-semibold mb-4 text-2xl">Special Offers</h1>
        <div className="flex justify-center gap-4 h-80">
          <div className="relative">
            <Image
              src="/promoLeft.jpg"
              alt="big promo"
              width={600}
              height={100}
              className="rounded-md h-full brightness-75"
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
                    className="bg-red-700 px-2 py-1 rounded-sm"
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

      {/* Recommended Categories & Products */}
      <div id="prod-grid" ref={gridRef}>
        <ProdCategories />
        <ProductGrid />
      </div>
    </main>
  );
}
