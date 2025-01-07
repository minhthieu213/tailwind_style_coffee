/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    letterSpacing:{
      widest: '.25em'
    },
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
      colors: {
        'light-coffee': '#C89F94'
      }
    },
  },
  plugins: [],
}

