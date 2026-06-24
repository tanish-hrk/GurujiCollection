"use client";
import { use, useState } from "react";
import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star, Truck, RotateCcw, Shield, Share2, MessageCircle } from "lucide-react";
import { formatPrice, getDiscountPercent } from "@/lib/utils";
import { useCartStore, useWishlistStore } from "@/lib/store";
import toast from "react-hot-toast";
import ProductCard from "@/components/ui/ProductCard";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);
  const discount = getDiscountPercent(product.price, product.salePrice);

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }
    toast.success(`Added to cart!`);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi! I'd like to order:\n*${product.name}*\nSize: ${selectedSize}\nColor: ${selectedColor}\nQty: ${quantity}\nPrice: ${formatPrice(product.salePrice)}`
    );
    window.open(`https://wa.me/919310223461?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-background-secondary border-b border-border py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs">
          <Link href="/" className="text-dark-text/50 hover:text-rose-gold">Home</Link>
          <span className="text-dark-text/30">/</span>
          <Link href="/shop" className="text-dark-text/50 hover:text-rose-gold">Shop</Link>
          <span className="text-dark-text/30">/</span>
          <Link href={`/shop/${product.category}`} className="text-dark-text/50 hover:text-rose-gold capitalize">
            {product.category}
          </Link>
          <span className="text-dark-text/30">/</span>
          <span className="text-rose-gold line-clamp-1">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-3">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-background-secondary rounded-xl overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {discount >= 15 && (
                <span className="absolute top-3 left-3 bg-rose-gold text-white text-xs px-2 py-1 font-medium">
                  -{discount}% OFF
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === i ? "border-rose-gold" : "border-border"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            {/* Category & Name */}
            <div>
              <Link
                href={`/shop/${product.category}`}
                className="text-xs text-rose-gold uppercase tracking-widest font-medium hover:text-hover"
              >
                {product.category}
              </Link>
              <h1 className="font-playfair text-3xl text-dark-text mt-1 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.round(product.rating) ? "text-amber-400 fill-amber-400" : "text-border"}
                    />
                  ))}
                </div>
                <span className="text-xs text-dark-text/60">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="font-playfair text-3xl font-bold text-rose-gold">
                {formatPrice(product.salePrice)}
              </span>
              <span className="text-base text-dark-text/40 line-through">
                {formatPrice(product.price)}
              </span>
              {discount >= 5 && (
                <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded font-medium">
                  Save {formatPrice(product.price - product.salePrice)}
                </span>
              )}
            </div>

            <div className="h-px bg-border" />

            {/* Color */}
            <div>
              <p className="text-sm font-semibold text-dark-text mb-2">
                Color: <span className="text-rose-gold font-normal">{selectedColor}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`text-xs px-3 py-1.5 border rounded transition-all ${
                      selectedColor === color
                        ? "border-rose-gold bg-rose-gold/5 text-rose-gold font-semibold"
                        : "border-border text-dark-text/70 hover:border-rose-gold/60"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-dark-text">
                  Size: <span className="text-rose-gold font-normal">{selectedSize}</span>
                </p>
                <button className="text-xs text-rose-gold underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[44px] text-xs px-3 py-2 border rounded transition-all ${
                      selectedSize === size
                        ? "border-rose-gold bg-rose-gold text-white font-semibold"
                        : "border-border text-dark-text/70 hover:border-rose-gold"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 hover:bg-nude-beige transition-colors text-dark-text"
                >
                  −
                </button>
                <span className="px-4 py-2 text-sm font-medium border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 hover:bg-nude-beige transition-colors text-dark-text"
                >
                  +
                </button>
              </div>
              <p className="text-xs text-dark-text/60">
                {product.stock > 10 ? "In Stock" : `Only ${product.stock} left!`}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <button onClick={handleAddToCart} className="btn-primary flex items-center justify-center gap-2 w-full py-4">
                <ShoppingBag size={16} />
                Add to Cart
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 w-full py-4 border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white transition-all rounded-sm text-sm font-semibold uppercase tracking-wide"
              >
                <MessageCircle size={16} />
                Order via WhatsApp
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    toggleItem(product);
                    toast.success(inWishlist ? "Removed from wishlist" : "Added to wishlist!");
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 border rounded-sm text-sm font-medium uppercase tracking-wide transition-all ${
                    inWishlist
                      ? "border-rose-gold bg-rose-gold/5 text-rose-gold"
                      : "border-border text-dark-text/70 hover:border-rose-gold hover:text-rose-gold"
                  }`}
                >
                  <Heart size={16} fill={inWishlist ? "currentColor" : "none"} />
                  {inWishlist ? "Wishlisted" : "Wishlist"}
                </button>
                <button className="w-12 h-12 border border-border rounded-sm flex items-center justify-center hover:border-rose-gold hover:text-rose-gold transition-all text-dark-text/70">
                  <Share2 size={16} />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: <Truck size={16} />, text: "Free Shipping above ₹999" },
                { icon: <RotateCcw size={16} />, text: "14-day Easy Returns" },
                { icon: <Shield size={16} />, text: "Secure Payment" },
              ].map((b) => (
                <div key={b.text} className="flex flex-col items-center gap-1.5 p-3 bg-background-secondary rounded-lg text-center">
                  <span className="text-rose-gold">{b.icon}</span>
                  <p className="text-[10px] text-dark-text/70 leading-tight">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-0 border-b border-border">
            {["description", "size-guide", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium capitalize tracking-wide transition-all border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-rose-gold text-rose-gold"
                    : "border-transparent text-dark-text/60 hover:text-dark-text"
                }`}
              >
                {tab.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="max-w-2xl">
                <p className="text-sm text-dark-text/80 leading-relaxed">{product.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-dark-text mb-2">Product Details</h4>
                    <ul className="space-y-1 text-xs text-dark-text/70">
                      <li>• Category: {product.category}</li>
                      <li>• Available Sizes: {product.sizes.join(", ")}</li>
                      <li>• Available Colors: {product.colors.join(", ")}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-text mb-2">Care Instructions</h4>
                    <ul className="space-y-1 text-xs text-dark-text/70">
                      <li>• Machine wash cold</li>
                      <li>• Do not bleach</li>
                      <li>• Iron on low heat</li>
                      <li>• Dry in shade</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "size-guide" && (
              <div className="overflow-x-auto">
                <table className="text-xs border border-border rounded">
                  <thead>
                    <tr className="bg-background-secondary">
                      {["Size", "Chest (in)", "Waist (in)", "Hip (in)", "Length (in)"].map((h) => (
                        <th key={h} className="px-4 py-2 text-left border-b border-border font-semibold text-dark-text">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["XS", "32", "26", "34", "44"],
                      ["S", "34", "28", "36", "44"],
                      ["M", "36", "30", "38", "44"],
                      ["L", "38", "32", "40", "45"],
                      ["XL", "40", "34", "42", "45"],
                      ["XXL", "42", "36", "44", "46"],
                    ].map((row) => (
                      <tr key={row[0]} className="hover:bg-background-secondary/50">
                        {row.map((cell, i) => (
                          <td key={i} className="px-4 py-2 border-b border-border text-dark-text/70">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-playfair text-4xl text-dark-text">{product.rating}</span>
                  <div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} className={i < Math.round(product.rating) ? "text-amber-400 fill-amber-400" : "text-border"} />
                      ))}
                    </div>
                    <p className="text-xs text-dark-text/60 mt-0.5">Based on {product.reviews} reviews</p>
                  </div>
                </div>
                <p className="text-sm text-dark-text/60 italic">
                  Reviews feature coming soon. Be the first to review this product!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-2xl text-dark-text">You Might Also Like</h2>
              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="h-px w-12 bg-rose-gold/40" />
                <span className="text-rose-gold text-xs">✦</span>
                <div className="h-px w-12 bg-rose-gold/40" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
