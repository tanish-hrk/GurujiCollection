"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you! You&apos;ll receive your 10% discount code shortly.");
    setEmail("");
  };

  return (
    <section className="py-14 px-4 bg-dark-text">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-champagne-gold text-xs uppercase tracking-widest font-medium">
          Stay Updated
        </span>
        <h2 className="font-playfair text-3xl text-background mt-2 mb-3">
          Join Our Newsletter
        </h2>
        <p className="text-background/60 text-sm mb-2 font-poppins">
          Subscribe and get <span className="text-champagne-gold font-semibold">10% OFF</span> on your first order.
        </p>
        <p className="text-background/40 text-xs mb-8">
          Be the first to know about new arrivals, exclusive offers, and fashion tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 border border-white/20 text-background placeholder-background/40 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-champagne-gold transition-colors"
            required
          />
          <button type="submit" className="bg-rose-gold text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-hover transition-colors rounded-sm whitespace-nowrap">
            Subscribe
          </button>
        </form>

        <p className="text-background/30 text-xs mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
