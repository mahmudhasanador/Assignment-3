/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'serif'], // Custom font family
      },
      keyframes: {
        scaleLoop: {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(0.99)' },
        },
      },
      animation: {
        scaleLoop: 'scaleLoop 2s infinite ease-in-out', // Register animation
      },
    },
  },
  plugins: [],
};
