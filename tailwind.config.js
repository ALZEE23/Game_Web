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
        '10xl': ['14rem', { lineHeight: '1' }], // font-size: 9rem; line-height: 1;
        '11xl': ['27rem', { lineHeight: '1' }], // font-size: 9rem; line-height: 1;
      },
    },
  },
  plugins: [],
};


// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

