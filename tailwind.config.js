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
        'dicoverbg': '#FFEBF1',
        'platformHeader': '#222C5B'      },
    },
  },
  plugins: [],
}

