/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#dc2626',
      },
      screen: {
        '2xl':'132px',
      }
    },
  },
  plugins: [],
}

