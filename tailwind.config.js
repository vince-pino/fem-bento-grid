/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
