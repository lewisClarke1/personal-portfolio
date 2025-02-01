import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          600: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#F3F4F6",
          800: "#111827",
        },
        accent: {
          DEFAULT: "#0D9488",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      fontSize: {
        base: ["18px", { lineHeight: "1.6" }],
        "2xl": ["2rem", { lineHeight: "1.2", fontWeight: "700" }],
        "3xl": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
      },
      fontWeight: {
        normal: "500",
        medium: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
} satisfies Config;
