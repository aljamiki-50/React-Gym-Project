/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "gx": { min: "200px", max: "300px" },
      "s": { min: "310px", max: "500px" },
      "xs": { min: "501px",max:"768px" }, 

      "md": { min: "770px", max: "950px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      "lg": { min: "951px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      "xl": { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
