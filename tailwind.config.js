/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'shadows': ['"Shadows Into Light"', 'cursive'], //Hand Lettering Schrift
      },
    },
  },
  plugins: [],
}

