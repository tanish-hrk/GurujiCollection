import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

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
      {/* Main Footer — 5 columns */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {/* Col 1: Brand */}
        <div className="lg:col-span-1">
          <Image
            src="/logo.png"
            alt="Guru Ji Collection"
            width={130}
            height={130}
            className="w-28 h-28 object-contain mb-2"
          />
          <p className="text-xs text-dark-text/70 italic font-playfair mb-4">
            Style that speaks for you
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="https://instagram.com/gurujicollection7__"
              target="_blank"
              aria-label="Instagram"
              className="w-8 h-8 bg-rose-gold/10 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all text-rose-gold"
            >
              <Instagram size={15} />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 bg-rose-gold/10 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all text-rose-gold"
            >
              <Facebook size={15} />
            </Link>
            <Link
              href="https://wa.me/919310223461"
              target="_blank"
              aria-label="WhatsApp"
              className="w-8 h-8 bg-rose-gold/10 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all text-rose-gold"
            >
              <MessageCircle size={15} />
            </Link>
            {/* Pinterest-style P icon */}
            <Link
              href="#"
              aria-label="Pinterest"
              className="w-8 h-8 bg-rose-gold/10 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all text-rose-gold font-bold text-sm"
            >
              P
            </Link>
          </div>
        </div>

        {/* Col 2: Shop */}
        <div>
          <h4 className="font-semibold text-sm text-dark-text mb-4 tracking-wide">SHOP</h4>
          <ul className="space-y-2.5">
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

        {/* Col 3: Help */}
        <div>
          <h4 className="font-semibold text-sm text-dark-text mb-4 tracking-wide">HELP</h4>
          <ul className="space-y-2.5">
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

        {/* Col 4: Customer Care */}
        <div>
          <h4 className="font-semibold text-sm text-dark-text mb-4 tracking-wide">CUSTOMER CARE</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+919310223461"
                className="flex items-center gap-2.5 text-xs text-dark-text/70 hover:text-rose-gold transition-colors"
              >
                <Phone size={14} className="text-rose-gold shrink-0" />
                9310223461
              </a>
            </li>
            <li>
              <a
                href="mailto:gurujicollection7@gmail.com"
                className="flex items-start gap-2.5 text-xs text-dark-text/70 hover:text-rose-gold transition-colors"
              >
                <Mail size={14} className="text-rose-gold shrink-0 mt-0.5" />
                gurujicollection7@gmail.com
              </a>
            </li>
            <li>
              <span className="flex items-start gap-2.5 text-xs text-dark-text/70">
                <MapPin size={14} className="text-rose-gold shrink-0 mt-0.5" />
                <span>
                  Malviya Nagar Market<br />
                  Jaipur, Rajasthan - 302017
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* Col 5: Follow Us + QR */}
        <div>
          <h4 className="font-semibold text-sm text-dark-text mb-4 tracking-wide">FOLLOW US</h4>
          <a
            href="https://instagram.com/gurujicollection7__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mb-4 hover:text-rose-gold transition-colors"
          >
            <Instagram size={16} className="text-rose-gold" />
            <span className="text-xs text-dark-text/80 font-medium">gurujicollection7__</span>
          </a>
          <div className="flex flex-col items-start gap-2">
            <Image
              src="/insta_qr_code.png"
              alt="Scan to follow on Instagram"
              width={130}
              height={130}
              className="w-32 h-32 rounded-lg border border-border object-contain"
            />
            <p className="text-[10px] text-dark-text/50">Scan to follow us on Instagram</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-dark-text/50">
            © 2026 HARI CODES. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/faq#privacy" className="text-xs text-dark-text/50 hover:text-rose-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq#terms" className="text-xs text-dark-text/50 hover:text-rose-gold transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
