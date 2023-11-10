import Sidebar from "@/components/Sidebar";
import PromoBanner from "@/components/PromoBanner";
import ProdCategories from "@/components/ProdCategories";
import ProductGrid from "@/components/ProductGrid";
import "../css/home.css";

export default function Home() {
  return (
    <main id="home-page">
      {/* sidebar */}
      <div id="side-filter">
        <Sidebar />
      </div>

      {/* promo banner  */}
      <div id="prod-banner" className="w-full">
        <PromoBanner />
      </div>

      {/* Recommended Categories & Products */}
      <div id="prod-grid">
        <ProdCategories />
        <ProductGrid />
      </div>
    </main>
  );
}
