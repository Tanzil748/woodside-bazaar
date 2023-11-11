"use client";
import { MutableRefObject, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import PromoBanner from "@/components/PromoBanner";
import ProdCategories from "@/components/ProdCategories";
import ProductGrid from "@/components/ProductGrid";
import "../css/home.css";

export default function Home() {
  const gridRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <main id="home-page">
      {/* sidebar */}
      <div id="side-filter">
        <Sidebar />
      </div>

      {/* promo banner  */}
      <div id="prod-banner" className="w-full">
        <PromoBanner gridRef={gridRef} />
      </div>

      {/* Recommended Categories & Products */}
      <div id="prod-grid" ref={gridRef}>
        <ProdCategories />
        <ProductGrid />
      </div>
    </main>
  );
}
