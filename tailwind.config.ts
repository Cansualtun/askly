import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // diğer pluginler varsa ekle
  ],
} satisfies Config;
