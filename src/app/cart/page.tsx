"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, Tag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import toast from "react-hot-toast";

const COUPONS: Record<string, number> = {
  GURU10: 10,
  FIRST15: 15,
  SAVE20: 20,
};

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);

  const subtotal = totalPrice();
  const discountAmt = appliedCoupon ? Math.round(subtotal * (appliedCoupon.discount / 100)) : 0;
  const shipping = subtotal >= 999 ? 0 : 79;
  const total = subtotal - discountAmt + shipping;

  const applyCoupon = () => {
    const code = coupon.toUpperCase().trim();
    if (COUPONS[code]) {
      setAppliedCoupon({ code, discount: COUPONS[code] });
      toast.success(`Coupon applied! ${COUPONS[code]}% off`);
    } else {
      toast.error("Invalid coupon code");
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
        <ShoppingBag size={80} className="text-nude-beige mb-6" />
        <h1 className="font-playfair text-3xl text-dark-text mb-3">Your Cart is Empty</h1>
        <p className="text-sm text-dark-text/60 mb-8 max-w-sm">
          Looks like you haven&apos;t added anything yet. Explore our beautiful collection!
        </p>
        <Link href="/shop" className="btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background-secondary border-b border-border py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-3xl text-dark-text">Shopping Cart</h1>
          <p className="text-xs text-dark-text/50 mt-1">{items.length} item(s)</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.size}-${item.color}`}
              className="bg-white border border-border rounded-xl p-4 flex gap-4">
              <div className="relative w-24 h-28 rounded-lg overflow-hidden shrink-0">
                <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <Link href={`/product/${item.product.slug}`} className="text-sm font-semibold text-dark-text hover:text-rose-gold">
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-dark-text/60 mt-0.5">
                      Size: {item.size} · Color: {item.color}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id, item.size, item.color)}
                    className="text-dark-text/30 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-border rounded">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                      className="p-1.5 hover:bg-nude-beige transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="px-3 text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                      className="p-1.5 hover:bg-nude-beige transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-rose-gold">
                      {formatPrice(item.product.salePrice * item.quantity)}
                    </p>
                    <p className="text-xs text-dark-text/40">
                      {formatPrice(item.product.salePrice)} each
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-2">
            <Link href="/shop" className="text-xs text-rose-gold hover:text-hover flex items-center gap-1">
              ← Continue Shopping
            </Link>
            <button onClick={() => { clearCart(); toast.success("Cart cleared"); }}
              className="text-xs text-dark-text/50 hover:text-red-400 transition-colors">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          {/* Coupon */}
          <div className="bg-white border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-dark-text mb-3 flex items-center gap-2">
              <Tag size={14} className="text-rose-gold" />
              Apply Coupon
            </h3>
            {appliedCoupon ? (
              <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded px-3 py-2">
                <span className="text-xs text-green-700 font-semibold">{appliedCoupon.code} — {appliedCoupon.discount}% OFF</span>
                <button onClick={() => setAppliedCoupon(null)} className="text-xs text-green-600 hover:text-red-500">Remove</button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="input-field flex-1 text-xs py-2"
                />
                <button onClick={applyCoupon} className="btn-primary text-xs py-2 px-3 whitespace-nowrap">
                  Apply
                </button>
              </div>
            )}
            <p className="text-[10px] text-dark-text/40 mt-2">Try: GURU10, FIRST15, SAVE20</p>
          </div>

          {/* Order Summary */}
          <div className="bg-white border border-border rounded-xl p-4">
            <h3 className="font-playfair text-lg text-dark-text mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-dark-text/70">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {discountAmt > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Discount ({appliedCoupon?.code})</span>
                  <span>-{formatPrice(discountAmt)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm text-dark-text/70">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-green-600">Free</span> : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-[10px] text-dark-text/50">
                  Add {formatPrice(999 - subtotal)} more for free shipping
                </p>
              )}
              <div className="h-px bg-border" />
              <div className="flex justify-between font-bold text-dark-text">
                <span className="font-playfair">Total</span>
                <span className="text-rose-gold font-playfair text-xl">{formatPrice(total)}</span>
              </div>
            </div>
            <Link href="/checkout" className="btn-primary w-full text-center block mt-4">
              Proceed to Checkout
            </Link>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-[10px] text-dark-text/40">Secure payments by</span>
              <span className="text-[10px] font-semibold text-dark-text/60">Razorpay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
