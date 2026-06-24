"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useWishlistStore, useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore();
  const { addItem } = useCartStore();

  const handleMoveToCart = (product: typeof items[0]) => {
    addItem(product, product.sizes[0], product.colors[0]);
    removeItem(product.id);
    toast.success("Moved to cart!");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
        <Heart size={80} className="text-nude-beige mb-6" />
        <h1 className="font-playfair text-3xl text-dark-text mb-3">Your Wishlist is Empty</h1>
        <p className="text-sm text-dark-text/60 mb-8 max-w-sm">
          Save your favourite items and shop them later.
        </p>
        <Link href="/shop" className="btn-primary">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background-secondary border-b border-border py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-3xl text-dark-text flex items-center gap-2">
            <Heart size={24} className="text-rose-gold fill-rose-gold" />
            My Wishlist
          </h1>
          <p className="text-xs text-dark-text/50 mt-1">{items.length} saved item(s)</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((product) => (
            <div key={product.id} className="bg-white border border-border rounded-xl overflow-hidden group">
              <div className="relative aspect-[3/4]">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                <button
                  onClick={() => { removeItem(product.id); toast.success("Removed from wishlist"); }}
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow text-dark-text/60 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="p-3">
                <Link href={`/product/${product.slug}`} className="text-sm font-medium text-dark-text hover:text-rose-gold line-clamp-1">
                  {product.name}
                </Link>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-semibold text-rose-gold">{formatPrice(product.salePrice)}</span>
                  <span className="text-xs text-dark-text/40 line-through">{formatPrice(product.price)}</span>
                </div>
                <button
                  onClick={() => handleMoveToCart(product)}
                  className="mt-3 w-full flex items-center justify-center gap-1.5 text-xs py-2 bg-rose-gold/10 text-rose-gold hover:bg-rose-gold hover:text-white border border-rose-gold/30 hover:border-rose-gold rounded transition-all font-medium uppercase tracking-wide"
                >
                  <ShoppingBag size={12} />
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
