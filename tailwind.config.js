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
        'discovertxt' : '#050038',
        'discoverpink' : '#FFD2F4',
        'gridleft' : '#F6F4FF',
        'gridright' : '#FFF3F3',
        
          },
    },
  },
  plugins: [],
}

