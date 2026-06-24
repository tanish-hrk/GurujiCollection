import Link from "next/link";

const stats = [
  { icon: "✦", title: "Premium Quality", sub: "Finest fabric & stitching" },
  { icon: "✦", title: "Latest Trends", sub: "Stylish & unique designs" },
  { icon: "✦", title: "Best Prices", sub: "Affordable fashion" },
  { icon: "✦", title: "Happy Customers", sub: "Trusted by 1000+ customers" },
];

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-background-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-xs font-medium tracking-widest text-rose-gold uppercase mb-3">
            About Us
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-dark-text leading-tight mb-2">
            Welcome to
          </h2>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-text mb-6">
            GURU JI COLLECTION
          </h2>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-rose-gold/40" />
            <span className="text-rose-gold text-xs">✦</span>
          </div>

          <p className="text-sm text-dark-text/70 leading-relaxed mb-4 font-poppins">
            At Guru Ji Collection, we believe in bringing style, comfort and confidence together.
            Our collections are carefully curated to bring you the latest trends with premium
            quality fabrics that feel as good as they look.
          </p>
          <p className="text-sm text-dark-text/70 leading-relaxed mb-8 font-poppins">
            From traditional ethnic suits to contemporary cord sets, every piece tells a story
            of craftsmanship and elegance. Located at Malviya Nagar Market, Jaipur, we serve
            fashion-forward women across India.
          </p>

          <Link href="/about" className="btn-primary">
            Read More About Us
          </Link>
        </div>

        {/* Right: Why Choose Us */}
        <div>
          <h3 className="font-playfair text-2xl text-dark-text text-center mb-8">
            WHY CHOOSE US?
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-background rounded-xl p-6 text-center border border-border hover:border-rose-gold/30 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-rose-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-rose-gold/20 transition-colors">
                  <span className="text-rose-gold text-xl">{stat.icon}</span>
                </div>
                <h4 className="font-playfair text-sm font-semibold text-dark-text mb-1">
                  {stat.title}
                </h4>
                <p className="text-xs text-dark-text/60">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
