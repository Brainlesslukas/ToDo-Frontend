/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Standard-Schriftart ändern
        raleway: ['Raleway', 'sans-serif'],
        alexandria: ['Alexandria', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
