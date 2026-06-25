"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore, useAddressStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { MapPin, CreditCard, Truck, CheckCircle, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";

type Step = "address" | "payment" | "review" | "success";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const { saveAddress } = useAddressStore();
  const [step, setStep]                 = useState<Step>("address");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "", city: "", state: "", pincode: "",
  });

  const subtotal = totalPrice();
  const shipping  = subtotal >= 999 ? 0 : 79;
  const total     = subtotal + shipping;

  const handleContinueToPayment = () => {
    if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) {
      toast.error("Please fill all required fields");
      return;
    }
    saveAddress({
      name: form.name,
      phone: form.phone,
      address: form.address,
      city: form.city,
      state: form.state,
      pincode: form.pincode,
    });
    setStep("payment");
  };

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully! 🎉");
    clearCart();
    setStep("success");
  };

  const handleWhatsAppOrder = () => {
    const lines = items
      .map(
        (item, i) =>
          `${i + 1}. ${item.product.name}\n   Size: ${item.size} | Color: ${item.color} | Qty: ${item.quantity} | ${formatPrice(item.product.salePrice * item.quantity)}`
      )
      .join("\n");

    const msg = encodeURIComponent(
      `Hi! I'd like to place an order 🛍️\n\n` +
      `*Order Details:*\n${lines}\n\n` +
      `*Subtotal:* ${formatPrice(subtotal)}\n` +
      `*Shipping:* ${shipping === 0 ? "Free" : formatPrice(shipping)}\n` +
      `*Total:* ${formatPrice(total)}\n\n` +
      `*Delivery Address:*\n${form.name}\n${form.phone}\n${form.address}, ${form.city}, ${form.state} - ${form.pincode}\n\n` +
      `*Payment:* Cash on Delivery`
    );

    window.open(`https://wa.me/919310223461?text=${msg}`, "_blank");
    clearCart();
    setStep("success");
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="font-playfair text-3xl text-dark-text mb-3">Order Placed!</h1>
          <p className="text-sm text-dark-text/60 mb-2">Thank you for shopping with Guru Ji Collection.</p>
          <p className="text-sm text-dark-text/60 mb-8">
            You&apos;ll receive a confirmation on {form.phone || form.email} shortly.
          </p>
          <div className="space-y-3">
            <Link href="/shop" className="btn-primary block">Continue Shopping</Link>
            <Link href="/account" className="btn-outline block">Track Your Order</Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="font-playfair text-2xl text-dark-text mb-4">Your cart is empty</p>
          <Link href="/shop" className="btn-primary">Shop Now</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background-secondary border-b border-border py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-playfair text-3xl text-dark-text mb-4">Checkout</h1>
          <div className="flex items-center gap-4">
            {(["address", "payment", "review"] as ("address" | "payment" | "review")[]).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step === s
                      ? "bg-rose-gold text-white"
                      : ["address", "payment", "review"].indexOf(step) > i
                      ? "bg-green-500 text-white"
                      : "bg-border text-dark-text/50"
                  }`}
                >
                  {i + 1}
                </div>
                <span className={`text-xs font-medium capitalize ${step === s ? "text-rose-gold" : "text-dark-text/50"}`}>
                  {s}
                </span>
                {i < 2 && <div className="w-8 h-px bg-border mx-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Steps */}
        <div className="lg:col-span-2">

          {/* ── Step 1: Address ── */}
          {step === "address" && (
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="font-playfair text-xl text-dark-text mb-5 flex items-center gap-2">
                <MapPin size={18} className="text-rose-gold" /> Delivery Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: "name",    label: "Full Name *",    placeholder: "Enter your full name" },
                  { key: "phone",   label: "Phone Number *", placeholder: "+91 XXXXX XXXXX" },
                  { key: "email",   label: "Email Address",  placeholder: "your@email.com" },
                  { key: "address", label: "Address *",      placeholder: "House no., Street, Area" },
                  { key: "city",    label: "City *",         placeholder: "City" },
                  { key: "state",   label: "State",          placeholder: "State" },
                  { key: "pincode", label: "Pincode *",      placeholder: "6-digit pincode" },
                ].map((field) => (
                  <div key={field.key} className={field.key === "address" ? "sm:col-span-2" : ""}>
                    <label className="block text-xs font-medium text-dark-text mb-1.5">{field.label}</label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                      className="input-field"
                    />
                  </div>
                ))}
              </div>
              <button onClick={handleContinueToPayment} className="btn-primary mt-6 w-full">
                Continue to Payment
              </button>
            </div>
          )}

          {/* ── Step 2: Payment ── */}
          {step === "payment" && (
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="font-playfair text-xl text-dark-text mb-5 flex items-center gap-2">
                <CreditCard size={18} className="text-rose-gold" /> Payment Method
              </h2>
              <div className="space-y-3">
                {[
                  { value: "cod",      label: "Cash on Delivery",  icon: "💵", desc: "Pay when your order arrives" },
                  { value: "upi",      label: "UPI Payment",       icon: "📱", desc: "PhonePe, GPay, Paytm, etc." },
                  { value: "razorpay", label: "Card / Net Banking", icon: "💳", desc: "All major cards and banks accepted" },
                ].map((method) => (
                  <button
                    key={method.value}
                    onClick={() => setPaymentMethod(method.value)}
                    className={`w-full flex items-center gap-4 p-4 border-2 rounded-xl text-left transition-all ${
                      paymentMethod === method.value
                        ? "border-rose-gold bg-rose-gold/5"
                        : "border-border hover:border-champagne-gold"
                    }`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-dark-text">{method.label}</p>
                      <p className="text-xs text-dark-text/60">{method.desc}</p>
                    </div>
                    <div
                      className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === method.value ? "border-rose-gold" : "border-border"
                      }`}
                    >
                      {paymentMethod === method.value && (
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-gold" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep("address")} className="btn-outline flex-1">Back</button>
                <button onClick={() => setStep("review")} className="btn-primary flex-1">Review Order</button>
              </div>
            </div>
          )}

          {/* ── Step 3: Review ── */}
          {step === "review" && (
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="font-playfair text-xl text-dark-text mb-5">Review Your Order</h2>
              <div className="space-y-4">
                {/* Address summary */}
                <div className="p-3 bg-background-secondary rounded-lg">
                  <p className="text-xs font-semibold text-dark-text mb-1 flex items-center gap-1">
                    <MapPin size={12} className="text-rose-gold" /> Delivery To
                  </p>
                  <p className="text-sm text-dark-text/80 font-medium">{form.name}</p>
                  <p className="text-xs text-dark-text/60">{form.address}, {form.city}, {form.state} - {form.pincode}</p>
                  <p className="text-xs text-dark-text/60">{form.phone}</p>
                </div>
                {/* Payment summary */}
                <div className="p-3 bg-background-secondary rounded-lg">
                  <p className="text-xs font-semibold text-dark-text mb-1">Payment Method</p>
                  <p className="text-sm text-dark-text/80">
                    {paymentMethod === "cod" ? "💵 Cash on Delivery" : paymentMethod === "upi" ? "📱 UPI Payment" : "💳 Card / Net Banking"}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep("payment")} className="btn-outline flex-1">Back</button>

                {paymentMethod === "cod" ? (
                  /* COD → WhatsApp order button */
                  <button
                    onClick={handleWhatsAppOrder}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white transition-all rounded-sm text-sm font-semibold uppercase tracking-wide"
                  >
                    <MessageCircle size={16} />
                    Send Order on WhatsApp
                  </button>
                ) : (
                  <button onClick={handlePlaceOrder} className="btn-primary flex-1">
                    Place Order
                  </button>
                )}
              </div>

              {paymentMethod === "cod" && (
                <p className="text-[11px] text-dark-text/50 text-center mt-3">
                  Your order details &amp; address will be sent directly to our WhatsApp for confirmation.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white border border-border rounded-xl p-5 h-fit lg:sticky lg:top-20">
          <h3 className="font-playfair text-lg text-dark-text mb-4">Order Summary</h3>
          <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-3">
                <div className="relative w-14 h-16 rounded overflow-hidden shrink-0">
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-gold text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-dark-text line-clamp-1">{item.product.name}</p>
                  <p className="text-[10px] text-dark-text/50">{item.size} · {item.color}</p>
                  <p className="text-xs font-semibold text-rose-gold mt-0.5">{formatPrice(item.product.salePrice * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-px bg-border mb-3" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-dark-text/70">
              <span>Subtotal</span><span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-dark-text/70">
              <span>Shipping</span>
              <span>{shipping === 0 ? <span className="text-green-600">Free</span> : formatPrice(shipping)}</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between font-bold text-dark-text">
              <span className="font-playfair">Total</span>
              <span className="text-rose-gold font-playfair text-lg">{formatPrice(total)}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-xs text-dark-text/50">
            <Truck size={12} />
            {shipping === 0 ? "Free shipping applied!" : `₹79 shipping · Free above ₹999`}
          </div>
        </div>
      </div>
    </div>
  );
}
