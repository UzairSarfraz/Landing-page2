/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        varelaRound: ["Varela Round", "sans-serif"],
        cabin: ["cabin", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        purplePrimary: {
          DEFAULT: "#7540ee",
        },
        purpleSecondary: "#6023e9",
        orangePrimary: "#ffab00",
        "orange-secondary": "#eca107",
        textPrimary: "#4e5d78",
        textSecondary: "#0a1f44",
        "light-white": {
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
