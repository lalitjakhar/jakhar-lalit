import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#101310",
        ink: "#f3f0e7",
        muted: "#b8baad",
        subtle: "#92958a",
        line: "#343b31",
        accent: "#dfc384",
        surface: "#171c18",
        elevated: "#20251f",
        fog: "#d5d4c7",
        "fog-dim": "#a3a392",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
