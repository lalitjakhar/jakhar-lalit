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
        paper: "#f6f5f1",
        ink: "#10100e",
        muted: "#3f3e3a",
        subtle: "#5e5c56",
        line: "#e4e1d8",
        accent: "#1d4ed8",
        fog: "#d6d3cb",
        "fog-dim": "#a8a69f",
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
