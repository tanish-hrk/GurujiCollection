"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { Product } from "@/lib/data";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { formatPrice, getDiscountPercent } from "@/lib/utils";
import toast from "react-hot-toast";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);
  const discount = getDiscountPercent(product.price, product.salePrice);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, product.sizes[0], product.colors[0]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleItem(product);
    toast.success(inWishlist ? "Removed from wishlist" : "Added to wishlist!");
  };

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/product/${product.slug}`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[3/4] bg-background-secondary">
          <Image
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.newArrival && (
              <span className="bg-dark-text text-background text-[10px] px-2 py-0.5 font-medium uppercase tracking-wide">
                New
              </span>
            )}
            {discount >= 15 && (
              <span className="bg-rose-gold text-white text-[10px] px-2 py-0.5 font-medium">
                -{discount}%
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div
            className={`absolute top-2 right-2 flex flex-col gap-2 transition-all duration-300 ${
              hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <button
              onClick={handleWishlist}
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors ${
                inWishlist
                  ? "bg-rose-gold text-white"
                  : "bg-white text-dark-text hover:bg-rose-gold hover:text-white"
              }`}
            >
              <Heart size={14} fill={inWishlist ? "currentColor" : "none"} />
            </button>
            <Link
              href={`/product/${product.slug}`}
              className="w-8 h-8 rounded-full bg-white text-dark-text hover:bg-rose-gold hover:text-white flex items-center justify-center shadow-md transition-colors"
            >
              <Eye size={14} />
            </Link>
          </div>

          {/* Add to Cart Overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-dark-text/90 text-background text-center py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            }`}
            onClick={handleAddToCart}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag size={12} />
              Add to Cart
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-3">
          <p className="text-xs text-dark-text/60 capitalize mb-0.5">{product.category}</p>
          <h3 className="text-sm font-medium text-dark-text line-clamp-1 group-hover:text-rose-gold transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.round(product.rating) ? "text-amber-400 fill-amber-400" : "text-border"}
              />
            ))}
            <span className="text-[10px] text-dark-text/50">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-sm font-semibold text-rose-gold">
              {formatPrice(product.salePrice)}
            </span>
            <span className="text-xs text-dark-text/40 line-through">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
