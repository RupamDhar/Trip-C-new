
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//     screens: {
//       '2xl': { 'max': '1535px' },
//       // => @media (max-width: 1535px) { ... }

//       'xl': { 'max': '1279px' },
//       // => @media (max-width: 1279px) { ... }

//       'lg': { 'max': '1023px' },
//       // => @media (max-width: 1023px) { ... }

//       'md': { 'max': '767px' },
//       // => @media (max-width: 767px) { ... }

//       'sm': { 'max': '639px' },
//       // => @media (max-width: 639px) { ... }
//     }
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'min': '1536px' }, // Tailwind uses `min-width` for screens
      // => @media (min-width: 1536px) { ... }

      'xl': { 'min': '1280px' },
      // => @media (min-width: 1280px) { ... }

      'lg': { 'min': '1024px' },
      // => @media (min-width: 1024px) { ... }

      'md': { 'min': '768px' },
      // => @media (min-width: 768px) { ... }

      'sm': { 'min': '640px' },
      // => @media (min-width: 640px) { ... }

      '2xl-max': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl-max': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg-max': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md-max': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm-max': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },

  plugins: [],
}


