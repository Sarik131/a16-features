/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.violet, DEFAULT: colors.violet[600] }
      }
    },
  },
  plugins: [],
}

