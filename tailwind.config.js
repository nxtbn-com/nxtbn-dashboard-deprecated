/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        short: { raw: "(max-height: 720px)" },
        shorter: { raw: "(max-height: 500px)" },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      fontWeight: {
        "nunito-h1": 900,
        "nunito-h2": 700,
        "nunito-h3": 700,
        "nunito-h4": 400,
        "nunito-subtitle": 300,
        "nunito-button": 700,
        "nunito-overline": 600,
        "lato-body-big": 400,
        "lato-body": 400,
        "lato-bold": 700,
        "lato-small": 400,
        "lato-small-bold": 700,
      },
      colors: {
        primary: {
          100: "#d4e3cc",
          200: "#a9c799",
          300: "#7daa66",
          400: "#528e33",
          500: "#277200",
        },
        secondary: {
          50: "#fafafa",
          100: "#eceff2",
          200: "#d9dfe4",
          300: "#c5d0d7",
          400: "#b2c0c9",
          500: "#9FB0BC",
        },
        base: {
          100: "#d6d9da",
          200: "#adb2b6",
          300: "#858c91",
          400: "#5c656d",
          500: "#333F48",
        },
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["short", "shorter"],
    },
  },

  plugins: [],
};
