/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },

    fontWeight: {
      normal: "400",
      bold: "700",
    },

    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",

      "very-dark-blue": "hsl(220, 13%, 13%)",
      "dark-grayish-blue": "hsl(219, 9%, 45%)",
      "grayish-blue": "hsl(220, 14%, 75%)",
      "light-grayish-blue": "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },

    screens: {
      md: "1000px",
      lg: "1350px",
    },

    extend: {
      boxShadow: {
        "cart-mobile": "0px 6px 20px 0px hsl(220,13%,13%,0.2)",
        "cart-desktop": "0px 15px 40px -7px hsla(220,13%,13%,0.2)",
      },
    },
  },
  plugins: [],
};
