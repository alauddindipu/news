/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popppins: "'Poppins', sans-serif;",
        edu: "'Edu AU VIC WA NT Dots', cursive",
      },
    },
  },
  plugins: [require("daisyui")],
};