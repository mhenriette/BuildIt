/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        genoa:'#4397A4',
        darkgenoa: '#486A6F',
        lightindigo:'#C6DBFF',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
