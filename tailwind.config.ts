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
        paper: "#0b100e",
        ink: "#eef3eb",
        muted: "#a9b5ad",
        subtle: "#7d8b82",
        line: "#27352d",
        accent: "#c7f36a",
        surface: "#111a16",
        elevated: "#16231c",
        fog: "#c3cdc5",
        "fog-dim": "#85958a",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-zalando-sans-expanded)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
