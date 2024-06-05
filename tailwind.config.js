/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'primary-card': '#E7E7E7',
        'primary-text': '#024E40',
        'primary-gradient': '#FEE694',
        'primary-button': '#7FC109',
        'secondary-button': '#AAE8C3',
        'secondary-text': '#61908E',
        'tertiary-text': '#024E40',
      },
    },
  },
  plugins: [],
}