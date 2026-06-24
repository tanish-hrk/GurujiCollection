"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore, useWishlistStore } from "@/lib/store";
import CartDrawer from "@/components/cart/CartDrawer";
import SearchModal from "@/components/ui/SearchModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/shop?filter=new" },
  { label: "Kurti", href: "/shop/kurti" },
  { label: "Suits", href: "/shop/suits" },
  { label: "Cord Sets", href: "/shop/cord-sets" },
  { label: "Palazzo", href: "/shop/palazzo" },
  { label: "Dupatta", href: "/shop/dupatta" },
  { label: "T-Shirt", href: "/shop/t-shirt" },
  { label: "Lower", href: "/shop/lower" },
  { label: "Shorts", href: "/shop/shorts" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());
  const wishlistCount = useWishlistStore((s) => s.items.length);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-dark-text text-background text-xs py-2 px-4 flex justify-between items-center">
        <span className="flex items-center gap-2">
          <span>🚚</span>
          <span className="hidden sm:inline">Free Shipping on all orders above ₹999</span>
          <span className="sm:hidden">Free Shipping above ₹999</span>
        </span>
        <span className="text-champagne-gold font-medium">
          Use Code: <span className="font-bold">GURU10</span> &amp; Get 10% OFF on your first order
        </span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        {/* Top row: Logo + Icons */}
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-dark-text"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Guru Ji Collection"
                width={90}
                height={90}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav Links - hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
              {navLinks.slice(0, 6).map((link) => (
                <Link key={link.href} href={link.href} className="nav-link text-xs">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-dark-text hover:text-rose-gold transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                href="/wishlist"
                className="relative text-dark-text hover:text-rose-gold transition-colors"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-rose-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                href="/account"
                className="hidden sm:flex text-dark-text hover:text-rose-gold transition-colors"
                aria-label="Account"
              >
                <User size={20} />
              </Link>
              <button
                onClick={() => setCartOpen(true)}
                className="relative text-dark-text hover:text-rose-gold transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-rose-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Nav */}
        <div className="hidden lg:block bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-xs whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-b border-border shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm py-1 border-b border-border"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
