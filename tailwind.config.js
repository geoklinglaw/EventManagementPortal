/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#7848F4",
        lightPurple: "#F1ECFD",
        white: "#FFFFFF",
        grey: "#7E7E7E",
        offwhite: "#F8F8FA",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
        product: ["Product Sans"],
      },
    },
  },
  plugins: [],
};
