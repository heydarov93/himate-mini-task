/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      backgroundColor: {
        primary: "#0E1111",
        overlay: "#0D121C",
      },
      colors: {
        "brand-primary-alt": "#099250",
      },
      borderColor: {
        primary: "#D2D6DB",
        "primary-btn": "#0E1111",
        secondary: "#E5E7EB",
        modern: "#EAECF0",
        "brand-primary-alt": "#099250",
      },
      textColor: {
        "brand-primary-alt": "#099250",
        primary: "#111927",
        secondary: "#384250",
        tertiary: "#4D5761",
        quarterary: "#6C737F",
      },
      placeholderColor: {
        primary: "#6C737F",
      },
      boxShadowColor: {
        primary: "#0E1111",
        modern: "#101828",
      },
      accentColor: {
        "brand-solid": "#16B364",
      },
    },
  },

  plugins: [],
};
