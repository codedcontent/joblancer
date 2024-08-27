import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "auth-pattern":
          "url(/images/jimmy-nilsson-masth-eMvQoeOVTjc-unsplash.jpg)",
      },
      colors: {
        primary: "#0074FF",
        disabled: "#C7C7C8",
        success: "#50C878",
        danger: "#DC143C",
        info: "#87CEEB",
      },
    },
  },
  plugins: [],
};
export default config;
