import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2489D3",
        secondary: "#F0C932",
      },
      backgroundImage: {
        laptop_boy: "url('/images/laptop_boy.png')",
        microsoft: "url('/images/microsoft.png')",
        datadotorg: "url('/images/data_org.png')",
        techsynergy: "url('/images/tech_synergy.png')",
        widb: "url('/images/widb.png')",
        ilo: "url('/images/ilo.png')",
        openai: "url('/images/openai.png')",
        github: "url('/images/github.png')",
        unijos: "url('/images/unijos.png')",
        koenig: "url('/images/koenig.png')",
      },
      boxShadow: {
        'custom-light': '0px 8px 24px rgba(149, 157, 165, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
