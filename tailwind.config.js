/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.slate, DEFAULT: colors.slate[800] }
      }
    },
  },
  plugins: [],
}

