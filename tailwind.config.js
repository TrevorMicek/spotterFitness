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
            'download': 'url("../images/newImg/CrossFit.jpg")',
            'gym': 'url("../images/newImg/gymBg.jpeg")'
        }
    },
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
