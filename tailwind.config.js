module.exports = {
  purge: ['./**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      borderWidth: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
