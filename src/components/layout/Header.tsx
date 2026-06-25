"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, User, ShoppingBag, Menu, X, Truck, Tag } from "lucide-react";
import { useCartStore, useWishlistStore } from "@/lib/store";
import CartDrawer from "@/components/cart/CartDrawer";
import SearchModal from "@/components/ui/SearchModal";

const navLinks = [
  { label: "HOME",        href: "/" },
  { label: "NEW ARRIVALS",href: "/shop?filter=new" },
  { label: "KURTI",       href: "/shop/kurti" },
  { label: "SUITS",       href: "/shop/suits" },
  { label: "CORD SETS",   href: "/shop/cord-sets" },
  { label: "PALAZZO",     href: "/shop/palazzo" },
  { label: "DUPATTA",     href: "/shop/dupatta" },
  { label: "T-SHIRT",     href: "/shop/t-shirt" },
  { label: "LOWER",       href: "/shop/lower" },
  { label: "SHORTS",      href: "/shop/shorts" },
  { label: "OFFERS",      href: "/offers" },
  { label: "CONTACT US",  href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [cartOpen, setCartOpen]           = useState(false);
  const [searchOpen, setSearchOpen]       = useState(false);
  const [showCompact, setShowCompact]     = useState(false);

  const totalItems   = useCartStore((s) => s.totalItems());
  const wishlistCount = useWishlistStore((s) => s.items.length);

  useEffect(() => {
    const onScroll = () => setShowCompact(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className="bg-dark-text text-background text-xs py-2 px-4 flex justify-between items-center">
        <span className="flex items-center gap-2">
          <Truck size={14} className="text-champagne-gold shrink-0" />
          <span className="hidden sm:inline">FREE SHIPPING on all orders above ₹999</span>
          <span className="sm:hidden">Free Shipping above ₹999</span>
        </span>
        <span className="flex items-center gap-2">
          <Tag size={12} className="text-champagne-gold shrink-0" />
          <span>
            Use Code: <span className="font-bold text-champagne-gold">GURU10</span> &amp; Get{" "}
            <span className="font-bold">10% OFF</span> on your first order
          </span>
        </span>
      </div>

      {/* ── Main Header (NOT sticky — scrolls away) ── */}
      <header className="bg-white shadow-sm">
        {/* Top Row: Search | Logo | Icons */}
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-3 items-center gap-4">

            {/* LEFT: hamburger (mobile) / search (desktop) */}
            <div className="flex items-center">
              <button
                className="lg:hidden text-dark-text mr-3"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden lg:flex items-center gap-2 w-full max-w-xs border border-border rounded-full px-4 py-2 text-sm text-dark-text/50 hover:border-rose-gold/60 transition-colors bg-background"
              >
                <Search size={14} className="text-rose-gold shrink-0" />
                <span>Search for products...</span>
              </button>
            </div>

            {/* CENTER: Logo */}
            <div className="flex justify-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Guru Ji Collection"
                  width={120}
                  height={120}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                  priority
                />
              </Link>
            </div>

            {/* RIGHT: icons */}
            <div className="flex items-center justify-end gap-4 md:gap-6">
              <button
                onClick={() => setSearchOpen(true)}
                className="lg:hidden text-dark-text hover:text-rose-gold transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              <Link href="/wishlist" className="flex flex-col items-center gap-0.5 group">
                <div className="relative">
                  <Heart size={22} className="text-dark-text group-hover:text-rose-gold transition-colors" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-rose-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:block text-[10px] text-dark-text/70 group-hover:text-rose-gold transition-colors font-medium">
                  Wishlist
                </span>
              </Link>

              <Link href="/account" className="hidden sm:flex flex-col items-center gap-0.5 group">
                <User size={22} className="text-dark-text group-hover:text-rose-gold transition-colors" />
                <span className="text-[10px] text-dark-text/70 group-hover:text-rose-gold transition-colors font-medium">
                  Account
                </span>
              </Link>

              <button
                onClick={() => setCartOpen(true)}
                className="flex flex-col items-center gap-0.5 group"
                aria-label="Cart"
              >
                <div className="relative">
                  <ShoppingBag size={22} className="text-dark-text group-hover:text-rose-gold transition-colors" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-rose-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="hidden sm:block text-[10px] text-dark-text/70 group-hover:text-rose-gold transition-colors font-medium">
                  Cart ({totalItems})
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Nav Row */}
        <div className="hidden lg:block bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold tracking-wide text-dark-text hover:text-rose-gold transition-colors py-3 border-b-2 border-transparent hover:border-rose-gold whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-border shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-dark-text hover:text-rose-gold py-2 border-b border-border/50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ── Compact Sticky Header (slides in on any scroll) ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-md transition-transform duration-300 ${
          showCompact ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center gap-3">

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-dark-text shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Small logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Guru Ji Collection"
              width={44}
              height={44}
              className="w-10 h-10 object-contain"
            />
          </Link>

          {/* Nav links — desktop */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-semibold tracking-wide text-dark-text hover:text-rose-gold transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3 ml-auto shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden lg:block text-dark-text hover:text-rose-gold transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <Link href="/wishlist" className="relative text-dark-text hover:text-rose-gold transition-colors">
              <Heart size={18} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-gold text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link href="/account" className="hidden sm:block text-dark-text hover:text-rose-gold transition-colors">
              <User size={18} />
            </Link>

            <button
              onClick={() => setCartOpen(true)}
              className="relative text-dark-text hover:text-rose-gold transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-gold text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
