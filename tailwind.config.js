/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'btnBlue' : '#23BDEE',
        'heroBlue' : '#044AB2',
        'footerbg' : '#121A41',
        'platformBg': '#EBE8FF',
        'discoverBg': '#FFEBF1',
        'platformHeader': '#222C5B',
        'uspColor' : '#7862FF', 
        'colorednavbg':'#08C1F9',
        'discovertxt' : '#050038',
        'discoverpink' : '#FFD2F4',
        'gridleft' : '#F6F4FF',
        'gridright' : '#FFF3F3',
        'supportleft':'#FFE0C9',
        'joinbg' : '#F4FCFF',
        'joinp' : '#F16607',
        'carouselB' : '#D7E5FE',
        'buttoncolor' :'#353131',
        'abtHeroH' : '#050038',
        'abtHeroP': '#3E4044', 
        'loginbg':'#FAF6F2',
        'textfield':'#233694',  
        'Outlinebg':'#08C1F9'
          },
    },
  },
  plugins: [],
}

