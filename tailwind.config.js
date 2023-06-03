/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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

