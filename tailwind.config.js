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
        lightgenoa:'#5BCCDE'
      },
      container: {
        center: true,
      },
      boxShadow:{
        shadows: '0px 30px 60px 0px #3B82F640'

      },
      backgroundImage:{
        'hero-pattern': "url('/bg2.svg')",
        'hero-background':"url('/bg1.svg')",
        'innovative-bg':"url('/bg3.svg')",
        'abouthome':"url('/about1.svg')",
        'aboutcontent':"url('/about2.svg')",
        'aboutcard':"url('/about3.svg')",
      }
      
    },
  },
  plugins: [],
}
