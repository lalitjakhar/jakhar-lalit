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
        paper: "#faf7f2",
        ink: "#261c1d",
        muted: "#655759",
        subtle: "#807274",
        line: "#e9ded9",
        accent: "#b8323b",
        "accent-hover": "#9f2832",
        "accent-soft": "#f7dedb",
        "accent-deep": "#92232d",
        surface: "#f2e9e5",
        elevated: "#fffdfa",
        hero: "#211619",
        night: "#302126",
        "night-raised": "#412d33",
        fog: "#ead9d7",
        "fog-dim": "#c6acab",
        blush: "#f3e8e7",
        "blush-deep": "#eadddb",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
