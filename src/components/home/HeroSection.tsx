"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "New Collection 2024",
    heading: "Style that",
    headingBold: "SPEAKS FOR YOU",
    sub: "Premium Collection of\nKurti, Suits, Cord Sets & More",
    cta: "Shop Now",
    ctaHref: "/shop",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85",
  },
  {
    id: 2,
    tag: "Festive Season",
    heading: "Elegance",
    headingBold: "REDEFINED",
    sub: "Handcrafted Ethnic Suits\n& Embroidered Anarkalis",
    cta: "Explore Suits",
    ctaHref: "/shop/suits",
    image: "https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=900&q=85",
  },
];

const features = [
  { icon: "✦", text: "Premium Quality Fabric & Stitch" },
  { icon: "✦", text: "Trendy Designs For Every Occasion" },
  { icon: "✦", text: "Easy Returns — Hassle Free" },
  { icon: "✦", text: "Secure Payment — 100% Safe" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative bg-background-secondary overflow-hidden min-h-[85vh] flex flex-col">
      <div className="flex-1 grid lg:grid-cols-2">
        {/* Left: Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-0 z-10 relative">
          <div key={slide.id} className="animate-fade-up">
            <span className="text-xs font-medium tracking-widest text-rose-gold uppercase border border-rose-gold/30 px-3 py-1 rounded-full">
              {slide.tag}
            </span>
            <h1 className="font-playfair mt-4">
              <span className="block text-3xl md:text-4xl lg:text-5xl italic text-dark-text/80 font-normal">
                {slide.heading}
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mt-1">
                {slide.headingBold}
              </span>
            </h1>

            {/* Ornament */}
            <div className="flex items-center gap-2 my-5">
              <div className="h-px w-12 bg-rose-gold/40" />
              <span className="text-rose-gold text-lg">✦</span>
              <div className="h-px w-12 bg-rose-gold/40" />
            </div>

            <p className="text-dark-text/70 text-base whitespace-pre-line leading-relaxed font-poppins">
              {slide.sub}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={slide.ctaHref} className="btn-primary">
                {slide.cta}
              </Link>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0">
            <Image
              key={slide.id}
              src={slide.image}
              alt="Guru Ji Collection"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-secondary/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="bg-nude-beige/60 border-t border-border py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.text} className="flex items-center gap-2">
              <span className="text-rose-gold text-xs">{f.icon}</span>
              <span className="text-xs text-dark-text/70 font-medium">{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-20 left-8 md:left-16 lg:left-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-6 h-2 bg-rose-gold" : "w-2 h-2 bg-rose-gold/30"
            }`}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow hover:bg-white transition-colors"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow hover:bg-white transition-colors"
      >
        <ChevronRight size={18} />
      </button>
    </section>
  );
}
