/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          default: "#131921",
        },
      },
      backgroundColor: {
        rich: "rgba(0,0,0,.8)",
      },

    },
  },
  plugins: [],
};
