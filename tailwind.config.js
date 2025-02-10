/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    darkTheme: "mytheme",
    themes: [
      {
        mytheme: {
          "primary": "#1F2937",
          "primary-content": "#ffffff",
          "secondary": "#374151",
          "secondary-content": "#ffffff",
          "accent": "#5045e3",
          "accent-content": "#ffffff",
          "neutral": "#1F2937",
          "base-100": "#111827",
          "success": "#00A63E",
          "success-content": "#ffffff" 
        },
        corporate: {
          ...require("daisyui/src/theming/themes")["corporate"],
          "accent": "#0069A8",
        },
      },
      "dark",
      "corporate"
    ], 
  },
  plugins: [require('daisyui')],
}

