/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode : 'class',
  theme: {
    extend: {
      screens:{
        'handphone' : '480px'
      }
    },
  },
  plugins: [],
}

