/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    safelist: [
    /^bg-/,
    /^to-/,
    /^from-/,
    ],
  }
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
