/** @type {import('tailwindcss').Config} */

 const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         'Playfair': ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
         'Nunito': ['Nunito Sans']
      }
    },
  },
  plugins: [],
}
