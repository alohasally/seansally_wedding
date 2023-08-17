/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nanum: ["Nanum Myeongjo", defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
