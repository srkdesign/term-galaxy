/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    screens: {
      sm: "860px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        dark: "url('assets/bg-dark.png')",
        light: "url('assets/bg-light.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F0F0F0",
            primary: {
              DEFAULT: "#1C1C1C",
              900: "#1C1C1C", // Icons
              100: "#5d5d5d", // Search icon and source
            },
            default: {
              DEFAULT: "#D9D9D9", // Buttons
              200: "#D4D4D4", // Input Border
              100: "#F2F2F2", // Input Color
              50: "#fff",
            },
            content1: "#F0F0F0", // Card background
          },
        },
        dark: {
          colors: {
            background: "#1C1C1C",
            divider: "#707070",
            primary: {
              DEFAULT: "#BCBCBC",
              900: "#FFFFFF", // Icons
              100: "#6E6E6E", // Icons
            },
            default: {
              DEFAULT: "#363636", // Input Color
              200: "#313131", // Input Border
              100: "#212121",
              50: "#fff",
            },
            content1: "#212121", // Card background
          },
        },
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
