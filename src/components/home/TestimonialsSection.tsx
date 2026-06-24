"use client";
import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visible; i++) {
      items.push(testimonials[(current + i) % total]);
    }
    return items;
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="section-title">WHAT OUR CUSTOMERS SAY</h2>
          <div className="section-divider">
            <div className="h-px w-16 bg-rose-gold/40" />
            <span className="text-rose-gold">✦</span>
            <div className="h-px w-16 bg-rose-gold/40" />
          </div>
        </div>

        {/* Cards */}
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisible().map((t) => (
              <div
                key={t.id}
                className="bg-background-secondary rounded-2xl p-6 border border-border hover:border-rose-gold/20 hover:shadow-md transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < t.rating ? "text-amber-400 fill-amber-400" : "text-border"}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm text-dark-text/80 leading-relaxed mb-4 italic font-poppins">
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Customer */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-text">{t.name}</p>
                    <p className="text-xs text-dark-text/50">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-2 bg-rose-gold" : "w-2 h-2 bg-rose-gold/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
