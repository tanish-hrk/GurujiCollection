"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll reply within 24 hours.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background-secondary border-b border-border py-10 px-4 text-center">
        <h1 className="font-playfair text-4xl text-dark-text">Contact Us</h1>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-px w-16 bg-rose-gold/40" />
          <span className="text-rose-gold">✦</span>
          <div className="h-px w-16 bg-rose-gold/40" />
        </div>
        <p className="text-sm text-dark-text/60 mt-3 max-w-md mx-auto">
          We&apos;d love to hear from you. Reach out for orders, queries, or just to say hello!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="font-playfair text-2xl text-dark-text mb-6">Get In Touch</h2>
            <div className="space-y-4">
              {[
                { icon: <Phone size={18} />, label: "Phone / WhatsApp", value: "9310223461", href: "tel:+919310223461" },
                { icon: <Mail size={18} />, label: "Email", value: "gurujicollection7@gmail.com", href: "mailto:gurujicollection7@gmail.com" },
                { icon: <Instagram size={18} />, label: "Instagram", value: "@gurujicollection7__", href: "https://instagram.com/gurujicollection7__" },
                { icon: <MapPin size={18} />, label: "Store Location", value: "Malviya Nagar Market, Jaipur, Rajasthan - 302017", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="flex items-start gap-4 p-4 bg-background-secondary rounded-xl hover:border-rose-gold/30 border border-transparent hover:border transition-all group"
                >
                  <div className="w-10 h-10 bg-rose-gold/10 rounded-full flex items-center justify-center text-rose-gold group-hover:bg-rose-gold group-hover:text-white transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-dark-text/50 font-medium uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm text-dark-text font-medium mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919310223461"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>

          {/* Map Embed (placeholder) */}
          <div className="rounded-xl overflow-hidden border border-border h-56 bg-nude-beige flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-rose-gold mx-auto mb-2" />
              <p className="text-sm font-medium text-dark-text">Malviya Nagar Market</p>
              <p className="text-xs text-dark-text/60">Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
          <h2 className="font-playfair text-2xl text-dark-text mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-dark-text mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-dark-text mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="input-field"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-dark-text mb-1.5">Email Address *</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-dark-text mb-1.5">Subject</label>
              <input
                type="text"
                placeholder="What is this regarding?"
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-dark-text mb-1.5">Message *</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us how we can help you..."
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="input-field resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full py-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
