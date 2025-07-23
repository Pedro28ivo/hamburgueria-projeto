/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assests/bg.png')"
      }
    },
  },
  plugins: [],
}
