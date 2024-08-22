/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      padding: {
        customClamp: "clamp(0.5rem, -10.3571rem + 22.619vw, 10rem)",
      },
      fontFamily: {
        custom: ["plus jakarta sans", "sans-serif"],
      },
      colors: {
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
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
