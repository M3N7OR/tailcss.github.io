/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
      }
    },
  },
  plugins: [],
}
