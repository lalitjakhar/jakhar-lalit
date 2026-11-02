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
        paper: "#f5f6fb",
        ink: "#171b2e",
        muted: "#596178",
        subtle: "#77809a",
        line: "#dfe3ef",
        accent: "#5867dc",
        "accent-hover": "#6877e8",
        "accent-soft": "#dfe3ff",
        "accent-deep": "#414ebf",
        surface: "#eaedf7",
        elevated: "#ffffff",
        hero: "#11182b",
        night: "#18213a",
        "night-raised": "#222d4a",
        fog: "#d4daed",
        "fog-dim": "#aab3cf",
        lavender: "#e9e9f5",
        "lavender-deep": "#e0e1f1",
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
