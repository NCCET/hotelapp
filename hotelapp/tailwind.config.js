/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkslategray: "rgba(65, 65, 65, 0.55)",
        gainsboro: "#d9d9d9",
        sienna: {
          "100": "#936c46",
          "200": "rgba(147, 108, 70, 0.35)",
          "300": "rgba(147, 108, 70, 0.76)",
          "400": "rgba(147, 108, 70, 0.5)",
        },
        whitesmoke: "#f5f5f5",
        dimgray: "#676767",
      },
      fontFamily: {
        inter: "Inter",
        kapakana: "Kapakana",
      },
    },
    fontSize: {
      "21xl": "40px",
      "29xl": "48px",
      xl: "20px",
      "45xl": "64px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
