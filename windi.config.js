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
        // https://colorsui.com/color-shades-generator/
        // '#00160d',
        // '#002c1a',
        // '#004227',
        // '#005834',  // dark
        // '#006e41',
        // '#00844e',
        // '#009a5b',  // header
        // '#00b068',
        // '#00c675',
        // '#00dc82',  // default
        // '#1ae08f',
        // '#33e39b',
        // '#4de7a8',
        // '#66eab4',
        // '#80eec1',  // lighter
        // '#99f1cd',
        // '#b3f5da',
        // '#ccf8e6',  // 100
      },
    },
    extend: {
    },
  },
  plugins: [],
}
