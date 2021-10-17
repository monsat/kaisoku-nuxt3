import colors from 'windicss/colors'
// const colors = require('windicss/colors')

export default {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      kayairo: {
        default: '#c7b183',
      },
      nuxt: {
        dark: '#005834',
        header: '#009a5b',
        default: '#00DC82',
        lighter: '#80eec0',
        100: '#ccf8e6',
      },
    },
    extend: {
    },
  },
  plugins: [],
}
