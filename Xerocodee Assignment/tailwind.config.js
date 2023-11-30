/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgwhite: "#fcfcff",
        lightsteelblue: {
          "100": "#c6deff",
          "200": "rgba(198, 222, 255, 0.25)",
          "300": "rgba(198, 222, 255, 0.1)",
        },
        "background-white": "#fff",
        "text-mid-grey": "#5e587a",
        gray: {
          "100": "#797979",
          "200": "#242331",
          "300": "rgba(255, 255, 255, 0.15)",
          "400": "rgba(255, 255, 255, 0.53)",
        },
        royalblue: "#0c5bc6",
        "text-bright-grey": "#332c5c",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "rgba(235, 235, 240, 0.5)",
        },
        "text-purple-haze": "#494369",
        gainsboro: "rgba(229, 229, 229, 0.5)",
        dodgerblue: {
          "100": "#4589ec",
          "200": "rgba(65, 146, 255, 0.3)",
        },
        lavender: "#eaecfd",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "body-b1-20px-regular": "'Nunito Sans'",
        "heading-h3-44px-semibold": "Poppins",
        nunito: "Nunito",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
        "101xl": "120px",
        "6xl": "25px",
        "10xs": "3px",
        "8xs": "5px",
        "16xl": "35px",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      "25xl": "44px",
      base: "16px",
      "9xl": "28px",
      xs: "12px",
      lg: "18px",
      "5xs": "8px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
