/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stick: "#041d34",
      },
    },
    fontFamily: {
      RobotoCondensed: ["Roboto Condensed", "serif"],
    },
  },
  plugins: [],
};
