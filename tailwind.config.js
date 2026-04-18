/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Fraunces'", "serif"],
      },
      colors: {
        forest: "#3A6B4A",
        sage:   "#6B9E7A",
        mint:   "#D4EDDA",
        beige:  "#F5F0E8",
        cream:  "#FAFAF7",
        earth:  "#8B6F5E",
        citric: "#D4A017",
        lime:   "#A8C23F",
        bark:   "#2C3E2D",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        soft:    "0 4px 24px rgba(58,107,74,0.10), 0 1px 4px rgba(0,0,0,0.04)",
        card:    "0 8px 32px rgba(58,107,74,0.12), 0 2px 8px rgba(0,0,0,0.05)",
        cta:     "0 8px 32px rgba(58,107,74,0.30)",
        whatsapp:"0 8px 28px rgba(37,211,102,0.35)",
      },
    },
  },
  plugins: [],
};

