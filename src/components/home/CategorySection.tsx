"use client";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function CategorySection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="section-title">SHOP BY CATEGORY</h2>
          <div className="section-divider">
            <div className="h-px w-16 bg-rose-gold/40" />
            <span className="text-rose-gold">✦</span>
            <div className="h-px w-16 bg-rose-gold/40" />
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Arch Image */}
              <div className="relative w-full aspect-[3/4] max-w-[120px] mx-auto overflow-hidden rounded-t-full rounded-b-lg bg-background-secondary shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-text/0 group-hover:bg-dark-text/10 transition-colors duration-300" />
              </div>

              {/* Label */}
              <div className="text-center">
                <p className="text-xs font-semibold text-dark-text group-hover:text-rose-gold transition-colors uppercase tracking-wide">
                  {cat.name}
                </p>
                <p className="text-[10px] text-dark-text/50 group-hover:text-rose-gold/70 flex items-center gap-0.5 justify-center mt-0.5 transition-colors">
                  Explore <ArrowRight size={8} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
