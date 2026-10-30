
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090D16",
        surface: "#0F172A",
        primary: "#00F2FE",
        secondary: "#7928CA",
      },
    },
  },
  plugins: [],
};