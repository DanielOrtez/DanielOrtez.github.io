const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      yellow: colors.amber,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      green: colors.green
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
