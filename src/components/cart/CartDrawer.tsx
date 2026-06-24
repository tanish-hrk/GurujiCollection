"use client";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

type Props = { open: boolean; onClose: () => void };

export default function CartDrawer({ open, onClose }: Props) {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-rose-gold" />
            <h2 className="font-playfair text-lg text-dark-text">
              Your Cart ({items.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-dark-text/60 hover:text-dark-text transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={64} className="text-nude-beige" />
              <div>
                <p className="font-playfair text-xl text-dark-text mb-2">Your cart is empty</p>
                <p className="text-sm text-dark-text/60">
                  Discover our beautiful collection and add items to your cart.
                </p>
              </div>
              <button onClick={onClose} className="btn-primary">
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.size}-${item.color}`}
                className="flex gap-3 p-3 bg-white rounded-lg border border-border">
                <div className="relative w-20 h-24 rounded overflow-hidden shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-text truncate">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-dark-text/60 mt-0.5">
                    {item.size} · {item.color}
                  </p>
                  <p className="text-sm font-semibold text-rose-gold mt-1">
                    {formatPrice(item.product.salePrice)}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-2 border border-border rounded">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                        }
                        className="p-1 hover:bg-nude-beige transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                        }
                        className="p-1 hover:bg-nude-beige transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.size, item.color)}
                      className="text-dark-text/40 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-dark-text">Subtotal</span>
              <span className="font-playfair text-lg font-semibold text-rose-gold">
                {formatPrice(totalPrice())}
              </span>
            </div>
            <p className="text-xs text-dark-text/60">
              Shipping calculated at checkout. Free shipping on orders above ₹999.
            </p>
            <div className="space-y-2">
              <Link
                href="/checkout"
                onClick={onClose}
                className="btn-primary w-full text-center block"
              >
                Proceed to Checkout
              </Link>
              <Link
                href="/cart"
                onClick={onClose}
                className="btn-outline w-full text-center block"
              >
                View Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
