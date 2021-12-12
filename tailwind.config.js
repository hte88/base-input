const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  //mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,json}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'sky-dark': '#00525f'
      }),
      colors: theme => ({
        'sky-dark': '#00525f'
      }),
      height: {
        'screen/5': '50vh',
        'screen/6': '60vh',
        'screen/7': '70vh',
        'screen/8': '80vh',
        'screen/9': '90vh',
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
