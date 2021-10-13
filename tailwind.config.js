const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kayairo: {
          default: '#c7b183',
        },
        nuxt: {
          default: '#00DC82',
          lighter: '#80eec0',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      borderWidth: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
