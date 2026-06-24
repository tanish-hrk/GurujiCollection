"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

type Props = { open: boolean; onClose: () => void };

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");

  const results = query.length > 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-background w-full max-w-xl rounded-xl shadow-2xl overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search size={18} className="text-dark-text/50" />
          <input
            autoFocus
            type="text"
            placeholder="Search for kurti, suits, cord sets..."
            className="flex-1 bg-transparent text-sm text-dark-text focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="text-dark-text/50 hover:text-dark-text">
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="max-h-96 overflow-y-auto">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                onClick={onClose}
                className="flex items-center gap-3 p-3 hover:bg-background-secondary transition-colors"
              >
                <div className="relative w-12 h-14 rounded overflow-hidden shrink-0">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-text">{product.name}</p>
                  <p className="text-xs text-dark-text/60 capitalize">{product.category}</p>
                  <p className="text-sm font-semibold text-rose-gold">{formatPrice(product.salePrice)}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : query.length > 1 ? (
          <div className="p-8 text-center text-sm text-dark-text/60">
            No products found for &ldquo;{query}&rdquo;
          </div>
        ) : (
          <div className="p-6">
            <p className="text-xs font-semibold text-dark-text/50 uppercase mb-3">Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {["Kurti", "Suits", "Cord Set", "Dupatta", "Palazzo"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1 text-xs border border-border rounded-full text-dark-text/70 hover:border-rose-gold hover:text-rose-gold transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
