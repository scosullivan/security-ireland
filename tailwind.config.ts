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
        forest: "#1B3326",
        fern: "#3D6B4F",
        sage: "#6B8F71",
        terracotta: "#B5563E",
        copper: "#D4875E",
        cream: "#F5F1E9",
        parchment: "#EBE6DB",
        rule: "#D4CFC4",
        ink: "#1A1A1A",
        graphite: "#4A4A4A",
        stone: "#9A9A8A",
      },
      fontFamily: {
        serif: ["Lora", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        label: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
