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
        paper: "#f5f2ea",
        ink: "#19251e",
        muted: "#58645b",
        subtle: "#788278",
        line: "#dce1d8",
        accent: "#b4864b",
        surface: "#e9eee7",
        elevated: "#fffefa",
        fog: "#dce4dc",
        "fog-dim": "#aeb9af",
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
