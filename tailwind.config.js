module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    screens: {
      xs: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      minHeight: {
        48: "12rem",
      },
      width: {
        50: "50px",
      },
      borderColor: {
        "white-20": "rgba(255, 255, 255, 0.2)",
        "dark-20": "rgb(135 135 135 / 20%)",
      },
      textColor: {
        "white-40": "rgba(255, 255, 255, 0.4)",
      },
      transitionTimingFunction: {
        "linear-2": "linear",
      },
    },
  },
  plugins: [],
};
