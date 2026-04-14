// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Baris ini SANGAT PENTING
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;