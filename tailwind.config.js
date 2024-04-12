/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "6rem",
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
      black: "#000",
      "body-grey": "#696969F2",
    },
    fontFamily: {
      display: ['"Inter"'],
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
        homeImage: "url('/assets/images/morawoBg.png')",
        "morawo-logo": "url('/assets/images/morawoIcon.png')",
      },
    },
  },
  safelist: ["font-family"],
};
