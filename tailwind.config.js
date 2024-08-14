/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["plus jakarta sans", "san-serif"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        veryLightGrayishBlue: "hsl(210, 60%, 98%)",
        lightGrayishBlue1: "hsl(211, 68%, 94%)",
        lightGrayishBlue2: "hsl(205, 33%, 90%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        veryDarkBlue: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
