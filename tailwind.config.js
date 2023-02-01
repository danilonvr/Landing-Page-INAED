/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryGreen: "#00FF9A",
      primaryBlue: "#2A9FBC",
      darkColor: "#212738",
      lightColor: "#FFF2F1",
      secondaryGreen: "#0B6E4F",
      secondaryBlue: "#0F3843",
      transparent: "transparent",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.953rem",
      "4xl": "2.5rem",
      "5xl": "3.052rem",
    },
    extend: {
      screens: {
        '125%': {'min': '1530px', 'max': '1919px'},
      // => @media (min-width: 1530px and max-width: 1919px) { ... }
      }
    },
  },
  plugins: [],
};
