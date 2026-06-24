import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function CollectionsSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="section-title">OUR COLLECTIONS</h2>
          <div className="section-divider">
            <div className="h-px w-16 bg-rose-gold/40" />
            <span className="text-rose-gold">✦</span>
            <div className="h-px w-16 bg-rose-gold/40" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((col, i) => (
            <Link
              key={col.slug}
              href={`/shop/${col.slug}`}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? "md:col-span-1 min-h-[300px]" : "min-h-[280px]"
              }`}
            >
              {/* Image */}
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-text/80 via-dark-text/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-champagne-gold text-xs uppercase tracking-widest mb-1 font-medium">
                  {col.subtitle}
                </p>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                  {col.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-xs text-white bg-rose-gold px-4 py-2 rounded-sm uppercase tracking-wide font-medium group-hover:bg-hover transition-colors">
                  Shop Now <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
