"use client";
import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";

export default function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bestSellers = products.filter((p) => p.bestSeller);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="section-title">BEST SELLERS</h2>
          <div className="section-divider">
            <div className="h-px w-16 bg-rose-gold/40" />
            <span className="text-rose-gold">✦</span>
            <div className="h-px w-16 bg-rose-gold/40" />
          </div>
          <p className="text-sm text-dark-text/60 mt-2 font-poppins">
            Most loved styles by our customers
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="min-w-[220px] md:min-w-[260px] snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
