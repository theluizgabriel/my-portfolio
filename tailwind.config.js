/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        bump: {
          '0%': { transform: '-translate-y-0' },
          '10%': { transform: '-translate-y-1' },
          '20%': { transform: '-translate-y-2' },
          '30%': { transform: '-translate-y-3' },
          '40%': { transform: '-translate-y-4' },
          '50%': { transform: '-translate-y-3' },
          '60%': { transform: '-translate-y-2' },
          '100%': { transform: '-translate-y-0' },
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'bumping-notebook': 'bump 5s linear infinite',
      },
      fontFamily: {
        Anek: ['Anek Telugu', 'sans-serif'],
        Staat: ['Staatliche', 'cursive'],
      }
    },
  },
  plugins: [],
}
