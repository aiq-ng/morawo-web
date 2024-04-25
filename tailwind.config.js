/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      "main-light-green": "#2ECC71",
      "light-green": "#2ECC710D",
      white: "#FFFFFF",
      "light-white": "#FAF9F9",
      black: "#000000",
      "light-grey": "#F8F9FA",
      "grey-700": "#737373",
      "grey-200": "#DBDBDB",
    },
    fontFamily: {
      display: ["Montserrat"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        homeImage: "url('/assets/images/home-bg.png')",
        imgOne: "url('/assets/images/img-01.png')",
        "morawo-logo": "url('/assets/icons/logo-icon.png')",
      },
    },
  },
  safelist: ["font-family"],
};
