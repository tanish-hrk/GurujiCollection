"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

const sections: { title: string; id: string; faqs: FAQ[] }[] = [
  {
    title: "Shipping",
    id: "shipping",
    faqs: [
      { q: "Do you offer free shipping?", a: "Yes! We offer free shipping on all orders above ₹999. For orders below ₹999, a flat shipping charge of ₹79 applies." },
      { q: "How long does delivery take?", a: "Standard delivery takes 4–7 business days. Express delivery (1–3 days) is available in select cities." },
      { q: "Do you ship pan India?", a: "Yes, we deliver to all major cities and towns across India." },
      { q: "How can I track my order?", a: "Once your order is shipped, you'll receive a tracking number via SMS/email. You can track it on our website or the courier's portal." },
    ],
  },
  {
    title: "Returns & Exchange",
    id: "returns",
    faqs: [
      { q: "What is your return policy?", a: "We accept returns within 14 days of delivery, provided the item is unused, unwashed, and in original packaging with tags intact." },
      { q: "How do I initiate a return?", a: "Contact us via WhatsApp (9310223461) or email (gurujicollection7@gmail.com) with your order ID and reason for return." },
      { q: "Can I exchange for a different size?", a: "Yes! Size exchanges are free. Contact us within 14 days of delivery with your order details." },
      { q: "Are there any items that cannot be returned?", a: "Items marked as 'Sale' or 'Final Sale', innerwear, and customized products are non-returnable." },
    ],
  },
  {
    title: "Payments",
    id: "payments",
    faqs: [
      { q: "What payment methods do you accept?", a: "We accept Cash on Delivery (COD), UPI, Credit/Debit Cards, Net Banking, and EMI options through Razorpay." },
      { q: "Is it safe to pay online?", a: "Absolutely! All online payments are processed through Razorpay, a PCI-DSS compliant payment gateway with bank-level security." },
      { q: "Can I pay on delivery?", a: "Yes, COD is available for orders up to ₹5000. COD is not available for orders outside serviceable pincode areas." },
      { q: "How do coupon codes work?", a: "Enter the coupon code at checkout to avail the discount. Only one coupon can be used per order. Coupons cannot be combined." },
    ],
  },
  {
    title: "Products",
    id: "products",
    faqs: [
      { q: "Are the product colors accurate?", a: "We try our best to display accurate colors. However, slight variations may occur due to screen settings and lighting conditions during photography." },
      { q: "How do I find my size?", a: "Refer to the size chart on each product page. If in doubt, we recommend sizing up. You can also WhatsApp us for size guidance." },
      { q: "Are the products genuine?", a: "Yes, all products at Guru Ji Collection are genuine and handpicked from trusted manufacturers and artisans." },
    ],
  },
  {
    title: "Terms & Privacy",
    id: "terms",
    faqs: [
      { q: "Do you store my personal information?", a: "We collect only the information necessary for order processing. We never sell your data to third parties." },
      { q: "Can I delete my account?", a: "Yes, contact our support team and we'll delete your account and associated data within 7 business days." },
    ],
  },
];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-background-secondary/50 transition-colors"
      >
        <span className="text-sm font-medium text-dark-text pr-4">{faq.q}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-rose-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 bg-white border-t border-border">
          <p className="text-sm text-dark-text/70 leading-relaxed pt-3">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background-secondary border-b border-border py-10 px-4 text-center">
        <h1 className="font-playfair text-4xl text-dark-text">FAQ&apos;s</h1>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-px w-16 bg-rose-gold/40" />
          <span className="text-rose-gold">✦</span>
          <div className="h-px w-16 bg-rose-gold/40" />
        </div>
        <p className="text-sm text-dark-text/60 mt-3">Frequently asked questions about orders, shipping, and more.</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Quick Nav */}
        <div className="flex flex-wrap gap-2 mb-10">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs px-3 py-1.5 border border-border rounded-full text-dark-text/70 hover:border-rose-gold hover:text-rose-gold transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="font-playfair text-2xl text-dark-text mb-5 flex items-center gap-3">
                <span>{section.title}</span>
                <div className="h-px flex-1 bg-border" />
              </h2>
              <div className="space-y-3">
                {section.faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 p-6 bg-background-secondary rounded-2xl text-center border border-border">
          <h3 className="font-playfair text-xl text-dark-text mb-2">Still have questions?</h3>
          <p className="text-sm text-dark-text/60 mb-4">Our team is happy to help you out.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919310223461" target="_blank" className="btn-primary text-center">
              WhatsApp Us
            </a>
            <a href="mailto:gurujicollection7@gmail.com" className="btn-outline text-center">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
