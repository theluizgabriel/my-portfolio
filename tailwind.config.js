/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Anek: ['Anek Telugu', 'sans-serif'],
        Staat: ['Staatliche', 'cursive'],
      }
    },
  },
  plugins: [],
}
