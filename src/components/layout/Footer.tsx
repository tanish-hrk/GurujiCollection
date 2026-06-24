import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const shopLinks = [
  { label: "Kurti", href: "/shop/kurti" },
  { label: "Suits", href: "/shop/suits" },
  { label: "Cord Sets", href: "/shop/cord-sets" },
  { label: "Palazzo", href: "/shop/palazzo" },
  { label: "Dupatta", href: "/shop/dupatta" },
  { label: "T-Shirt", href: "/shop/t-shirt" },
  { label: "Lower", href: "/shop/lower" },
  { label: "Shorts", href: "/shop/shorts" },
];

const helpLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Shipping Policy", href: "/faq#shipping" },
  { label: "Return & Exchange", href: "/faq#returns" },
  { label: "Terms & Conditions", href: "/faq#terms" },
  { label: "Privacy Policy", href: "/faq#privacy" },
  { label: "FAQ's", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Trust Bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🚚", title: "Free Shipping", sub: "On orders above ₹999" },
            { icon: "↩️", title: "Easy Returns", sub: "14 days return policy" },
            { icon: "🔒", title: "Secure Payments", sub: "100% safe & secure" },
            { icon: "✨", title: "Premium Quality", sub: "Finest fabric & stitching" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-xs font-semibold text-dark-text">{item.title}</p>
                <p className="text-xs text-dark-text/60">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand */}
        <div>
          <Image src="/logo.png" alt="Guru Ji Collection" width={80} height={80} className="object-contain mb-3" />
          <p className="text-xs text-dark-text/70 italic font-playfair mb-4">
            Style that speaks for you
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="https://instagram.com/gurujicollection7__"
              target="_blank"
              className="w-8 h-8 bg-rose-gold/10 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all text-rose-gold"
            >
              <Instagram size={14} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-rose-gold/10 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all text-rose-gold"
            >
              <Facebook size={14} />
            </Link>
            <Link
              href="https://wa.me/919310223461"
              target="_blank"
              className="w-8 h-8 bg-rose-gold/10 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all text-rose-gold"
            >
              <span className="text-xs font-bold">W</span>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-rose-gold/10 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all text-rose-gold"
            >
              <span className="text-xs font-bold">P</span>
            </Link>
          </div>
        </div>

        {/* Column 2: Shop */}
        <div>
          <h4 className="font-playfair text-base font-semibold text-dark-text mb-4">SHOP</h4>
          <ul className="space-y-2">
            {shopLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-dark-text/70 hover:text-rose-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Help */}
        <div>
          <h4 className="font-playfair text-base font-semibold text-dark-text mb-4">HELP</h4>
          <ul className="space-y-2">
            {helpLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-dark-text/70 hover:text-rose-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-playfair text-base font-semibold text-dark-text mb-4">CUSTOMER CARE</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+919310223461"
                className="flex items-center gap-2 text-xs text-dark-text/70 hover:text-rose-gold transition-colors"
              >
                <Phone size={12} />
                9310223461
              </a>
            </li>
            <li>
              <a
                href="mailto:gurujicollection7@gmail.com"
                className="flex items-center gap-2 text-xs text-dark-text/70 hover:text-rose-gold transition-colors"
              >
                <Mail size={12} />
                gurujicollection7@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/gurujicollection7__"
                target="_blank"
                className="flex items-center gap-2 text-xs text-dark-text/70 hover:text-rose-gold transition-colors"
              >
                <Instagram size={12} />
                @gurujicollection7__
              </a>
            </li>
            <li>
              <span className="flex items-start gap-2 text-xs text-dark-text/70">
                <MapPin size={12} className="mt-0.5 shrink-0" />
                Malviya Nagar Market, Jaipur, Rajasthan - 302017
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-dark-text/50">
            © 2024 Guru Ji Collection. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/faq#privacy" className="text-xs text-dark-text/50 hover:text-rose-gold">
              Privacy Policy
            </Link>
            <Link href="/faq#terms" className="text-xs text-dark-text/50 hover:text-rose-gold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
