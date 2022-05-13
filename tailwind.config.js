const { url } = require('inspector')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            'gold': 'rgb(132,92,65)',
            'cream': 'rgb(231,208,175)',
            'bg': 'rgb(17, 24, 38)'
        },
        backgroundImage: {
            'download': 'url("../images/newImg/graphics/home/7_Screen.png")',
            'gym': 'url("../images/newImg/graphics/home/9_Screen@3x.png")',
            'footer': 'url("../images/newImg/graphics/Header-footer/Footer@3x.png")'
        },
        font: {
            'default': 'libre-franklin'
        },
        fontSize: {
            'default': '9px'
        }
    },
    fontFamily: {
      'default': ['"Libre Franklin"']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
       require('@tailwindcss/aspect-ratio'),
       require('@tailwindcss/typography'),
       require('@tailwindcss/forms'),
],
}
