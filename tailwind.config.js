/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'staatliches': ['Staatliches', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['14rem', { lineHeight: '1' }], // font-size: 9rem; line-height: 1;
        '11xl': ['27rem', { lineHeight: '1' }], // font-size: 9rem; line-height: 1;
      },
    },
  },
  plugins: [],
}

