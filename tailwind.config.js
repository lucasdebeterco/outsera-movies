/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#95d3da',
        'primary-light': '#dee8ea',
        'secondary': '#202125',
        'secondary-light': '#2b2c30'
      }
    },
  },
  plugins: [],
}