/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(3rem)' },
          '100%': { transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0.5px 0.5px 10px #fff' },
          '50%': { boxShadow: '2px 2px 25px #fff' },
          '100%': { boxShadow: '0.5px 0.5px 10px #fff' },
        },
      },
      animation: {
        moveUp: 'moveUp 2.5s ease',
        glow: 'glow 3s ease infinite',
      },
      fontFamily: {
        isLight: ['Irs light'],
        isMedium: ['Irs medium'],
        isBold: ['Irs bold'],
        isReg: ['Irs', ...defaultTheme.fontFamily.sans],
        isNumeric: ['Irs numeric'],
        isNumericBold: ['Irs numeric bold'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss-animation-delay'),
  ],
}
