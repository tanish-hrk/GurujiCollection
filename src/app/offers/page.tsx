import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { getDiscountPercent } from "@/lib/utils";
import { Tag } from "lucide-react";

export default function OffersPage() {
  const saleItems = products.filter((p) => getDiscountPercent(p.price, p.salePrice) >= 20);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-dark-text py-12 px-4 text-center">
        <span className="text-champagne-gold text-xs uppercase tracking-widest">Limited Time</span>
        <h1 className="font-playfair text-4xl text-background mt-2">Special Offers</h1>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-px w-16 bg-champagne-gold/40" />
          <span className="text-champagne-gold">✦</span>
          <div className="h-px w-16 bg-champagne-gold/40" />
        </div>
        <p className="text-background/60 text-sm mt-3">
          Grab the best deals before they&apos;re gone!
        </p>
      </div>

      {/* Coupon Banner */}
      <div className="bg-rose-gold/10 border-b border-rose-gold/20 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6">
          {[
            { code: "GURU10", off: "10% OFF", desc: "First order" },
            { code: "FIRST15", off: "15% OFF", desc: "All products" },
            { code: "SAVE20", off: "20% OFF", desc: "Orders above ₹1500" },
          ].map((c) => (
            <div key={c.code} className="flex items-center gap-3 bg-white border border-rose-gold/20 rounded-xl px-4 py-3">
              <Tag size={16} className="text-rose-gold" />
              <div>
                <p className="text-xs text-dark-text/60">{c.desc}</p>
                <p className="font-playfair text-lg text-dark-text">
                  {c.off} — <span className="text-rose-gold font-bold">{c.code}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="font-playfair text-2xl text-dark-text mb-6">
          Sale Products ({saleItems.length})
        </h2>

        {saleItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-playfair text-xl text-dark-text mb-2">New Offers Coming Soon!</p>
            <p className="text-sm text-dark-text/60 mb-6">Follow us on Instagram @gurujicollection7__ for updates.</p>
            <Link href="/shop" className="btn-primary">Shop All Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {saleItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
