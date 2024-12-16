/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px -2px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        "satoshi-light": ["Satoshi-Light", "sans-serif"],
        "satoshi-regular": ["Satoshi-Regular", "sans-serif"],
        "satoshi-medium": ["Satoshi-Medium", "sans-serif"],
        "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
      },
      colors: {
        primary: "#175CFF",
        secondary: "#F7F9FC",
        selected: "#E3EAFB",
        disabled: "#D0D5DD",
        gray: {
          100: "#F0F2F5",
          200: "#E4E7EC",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667185",
          600: "#475367",
          700: "#344054",
          800: "#1D2939",
          900: "#101928",
        },
        green: {
          500: "#E7F6EC",
          800: "#0F973D",
        },
        orange: {
          DEFAULT: "#F56630",
          light: "#FFECE5",
        },
        red: {
          500: "#EF4444",
        },
        white: "#FFFFFF",
        black: "#000000",
        border: "#E4E7EC",
        text: {
          primary: "#101928",
          secondary: "#475367",
          tertiary: "#98A2B3",
          disabled: "#D0D5DD",
        },
      },
    },
  },
  plugins: [],
};
