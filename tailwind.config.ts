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
      fontSize: {
        "display-title": [
          "clamp(2.75rem, 5vw, 4.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.055em" },
        ],
        section: [
          "clamp(2rem, 3.8vw, 3rem)",
          { lineHeight: "1.08", letterSpacing: "-0.045em" },
        ],
        subsection: [
          "clamp(1.375rem, 2.5vw, 1.75rem)",
          { lineHeight: "1.2", letterSpacing: "-0.035em" },
        ],
        "project-title": [
          "clamp(1.25rem, 2vw, 1.625rem)",
          { lineHeight: "1.2", letterSpacing: "-0.03em" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
