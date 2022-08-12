/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'blue': '#00B6F0',
        'gray': '#EFEFEF',
        'gray-dark': '#D0D0D0'
      },
    },
  },
  plugins: [],
}
