import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Guru Ji Collection",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-64 md:h-80 bg-background-secondary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&q=80&auto=format&fit=crop"
            alt="About Guru Ji Collection"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="font-playfair text-4xl md:text-5xl text-dark-text mb-3">About Us</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-rose-gold/60" />
            <span className="text-rose-gold">✦</span>
            <div className="h-px w-16 bg-rose-gold/60" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs text-rose-gold uppercase tracking-widest mb-2">Our Story</p>
            <h2 className="font-playfair text-3xl text-dark-text mb-5 leading-tight">
              Welcome to<br /><span className="font-bold">Guru Ji Collection</span>
            </h2>
            <p className="text-sm text-dark-text/70 leading-relaxed mb-4">
              Born from a passion for fashion and a love for Indian craftsmanship, Guru Ji Collection
              was founded with one simple belief — every woman deserves to look and feel beautiful
              without breaking the bank.
            </p>
            <p className="text-sm text-dark-text/70 leading-relaxed mb-4">
              Located in the heart of Malviya Nagar Market, Jaipur, we&apos;ve been serving fashion-forward
              women with premium ethnic and casual wear since our inception. Our carefully curated
              collections blend traditional Indian aesthetics with modern silhouettes.
            </p>
            <p className="text-sm text-dark-text/70 leading-relaxed">
              From delicate chikankari kurtis to trending cord sets, every piece in our collection
              tells a story of quality, style, and craftsmanship.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&h=640&q=80&auto=format&fit=crop"
              alt="Our Collection"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="text-center">
          <p className="text-xs text-rose-gold uppercase tracking-widest mb-2">Our Mission</p>
          <h2 className="font-playfair text-3xl text-dark-text mb-3">What We Stand For</h2>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-16 bg-rose-gold/40" />
            <span className="text-rose-gold">✦</span>
            <div className="h-px w-16 bg-rose-gold/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌸",
                title: "Timeless Style",
                desc: "Designs that blend tradition with modernity, creating outfits that transcend seasons and trends.",
              },
              {
                icon: "✦",
                title: "Premium Quality",
                desc: "Every thread counts. We source only the finest fabrics to ensure comfort, durability, and elegance.",
              },
              {
                icon: "💛",
                title: "Affordable Fashion",
                desc: "Luxury shouldn't be a privilege. We bring premium fashion to every woman at honest prices.",
              },
            ].map((val) => (
              <div key={val.title} className="bg-background-secondary rounded-2xl p-6 text-center">
                <span className="text-3xl mb-3 block">{val.icon}</span>
                <h3 className="font-playfair text-lg text-dark-text mb-2">{val.title}</h3>
                <p className="text-xs text-dark-text/60 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-dark-text rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "1000+", label: "Happy Customers" },
            { number: "500+", label: "Products" },
            { number: "8+", label: "Categories" },
            { number: "4.8★", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-playfair text-3xl font-bold text-champagne-gold">{stat.number}</p>
              <p className="text-xs text-background/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/shop" className="btn-primary">
            Explore Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
