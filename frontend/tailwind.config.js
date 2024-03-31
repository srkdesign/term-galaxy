const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter", ...defaultTheme.fontFamily.sans],
        "serif": ["Vollkorn", ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}

