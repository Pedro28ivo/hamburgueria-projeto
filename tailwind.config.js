/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage:{
        "home": "url('/assests/bg.png')"
      }
    },
  },
  plugins: [],
}
