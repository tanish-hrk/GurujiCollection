"use client";
import { use } from "react";
import { products, categories } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const cat = categories.find((c) => c.slug === category);

  if (!cat) notFound();

  const filtered = products.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background-secondary border-b border-border py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-4xl text-dark-text">{cat.name}</h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Link href="/" className="text-xs text-dark-text/50 hover:text-rose-gold">Home</Link>
            <span className="text-xs text-dark-text/30">/</span>
            <Link href="/shop" className="text-xs text-dark-text/50 hover:text-rose-gold">Shop</Link>
            <span className="text-xs text-dark-text/30">/</span>
            <span className="text-xs text-rose-gold">{cat.name}</span>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-rose-gold/40" />
            <span className="text-rose-gold text-sm">✦</span>
            <div className="h-px w-16 bg-rose-gold/40" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-sm text-dark-text/60 mb-6">{filtered.length} products</p>
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-playfair text-2xl text-dark-text mb-3">
              Coming Soon!
            </p>
            <p className="text-sm text-dark-text/60 mb-6">
              We&apos;re adding amazing {cat.name} to our collection.
            </p>
            <Link href="/shop" className="btn-primary">Browse All Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
