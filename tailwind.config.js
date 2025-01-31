// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          scaleLoop: "scaleLoop 2s infinite ease-in-out",
        },
        keyframes: {
          scaleLoop: {
            "0%, 100%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.1)" },
          },
        },
      },
    },
    plugins: [],
  };
  