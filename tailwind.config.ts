import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F6",
        "background-secondary": "#F4EEE8",
        "rose-gold": "#C99A84",
        "champagne-gold": "#D8B9A2",
        "nude-beige": "#E8D7CC",
        "blush-pink": "#F7E7E3",
        "dark-text": "#4A3932",
        border: "#E6DDD6",
        hover: "#B67F69",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
