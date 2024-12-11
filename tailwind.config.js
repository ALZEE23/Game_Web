/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",'./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily:{
        'staatliches': ['Staatliches', 'sans-serif'],
      },
      fontSize: {
        'mxl': ['12rem', { lineHeight: '1' }],
        '10xl': ['14rem', { lineHeight: '1' }], 
        '11xl': ['27rem', { lineHeight: '1' }], 
      },
    },
  },
  plugins: [],
};




