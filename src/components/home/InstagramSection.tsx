import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const posts = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
  "https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=400&q=80",
  "https://images.unsplash.com/photo-1594938298603-c8148c4b4545?w=400&q=80",
  "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&q=80",
  "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
];

export default function InstagramSection() {
  return (
    <section className="py-16 px-4 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <Link
            href="https://instagram.com/gurujicollection7__"
            target="_blank"
            className="inline-flex items-center gap-2 text-dark-text hover:text-rose-gold transition-colors"
          >
            <Instagram size={20} />
            <span className="font-playfair text-2xl">@gurujicollection7__</span>
          </Link>
          <p className="text-sm text-dark-text/60 mt-2">
            Follow us for daily style inspiration
          </p>
          <div className="section-divider mt-3">
            <div className="h-px w-16 bg-rose-gold/40" />
            <span className="text-rose-gold">✦</span>
            <div className="h-px w-16 bg-rose-gold/40" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {posts.map((src, i) => (
            <Link
              key={i}
              href="https://instagram.com/gurujicollection7__"
              target="_blank"
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-text/0 group-hover:bg-dark-text/30 transition-all duration-300 flex items-center justify-center">
                <Instagram
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
