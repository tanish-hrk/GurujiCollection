"use client";
import Link from "next/link";
import { User, Package, Heart, MapPin, LogOut, Settings } from "lucide-react";

export default function AccountPage() {
  const menu = [
    { icon: <Package size={20} />, title: "My Orders", sub: "Track and manage your orders", href: "#orders" },
    { icon: <Heart size={20} />, title: "Wishlist", sub: "Your saved items", href: "/wishlist" },
    { icon: <MapPin size={20} />, title: "Saved Addresses", sub: "Manage delivery addresses", href: "#addresses" },
    { icon: <Settings size={20} />, title: "Account Settings", sub: "Update your profile", href: "#settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background-secondary border-b border-border py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl text-dark-text">My Account</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Profile Card */}
        <div className="bg-white border border-border rounded-xl p-6 flex items-center gap-5 mb-8">
          <div className="w-16 h-16 bg-rose-gold/10 rounded-full flex items-center justify-center">
            <User size={32} className="text-rose-gold" />
          </div>
          <div>
            <h2 className="font-playfair text-xl text-dark-text">Welcome Back!</h2>
            <p className="text-sm text-dark-text/60 mt-0.5">Manage your orders, wishlist and more.</p>
          </div>
          <div className="ml-auto">
            <div className="bg-rose-gold/10 border border-rose-gold/30 text-rose-gold text-xs px-3 py-1.5 rounded-full font-medium">
              Guest User
            </div>
          </div>
        </div>

        {/* Auth Notice */}
        <div className="bg-champagne-gold/20 border border-champagne-gold/40 rounded-xl p-5 mb-8 text-center">
          <p className="text-sm text-dark-text mb-3">
            Sign in to track orders, manage wishlist, and get exclusive deals.
          </p>
          <div className="flex justify-center gap-3">
            <button className="btn-primary text-sm px-5 py-2">Sign In</button>
            <button className="btn-outline text-sm px-5 py-2">Create Account</button>
          </div>
          <p className="text-xs text-dark-text/50 mt-3">
            Authentication powered by Clerk — Coming Soon
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white border border-border rounded-xl p-5 flex items-center gap-4 hover:border-rose-gold/30 hover:shadow-sm transition-all group"
            >
              <div className="w-11 h-11 bg-rose-gold/10 rounded-full flex items-center justify-center text-rose-gold group-hover:bg-rose-gold group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-dark-text">{item.title}</p>
                <p className="text-xs text-dark-text/50 mt-0.5">{item.sub}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <button className="mt-6 flex items-center gap-2 text-sm text-dark-text/50 hover:text-red-400 transition-colors">
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
}
