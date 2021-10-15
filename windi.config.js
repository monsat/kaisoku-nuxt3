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
        default: '#00DC82',
        lighter: '#80eec0',
      },
    },
    extend: {
    },
  },
  plugins: [],
}
