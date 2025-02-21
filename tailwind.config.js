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
          "success-content": "#ffffff",
          "info": "#155DFC",
          "info-content": "#ffffff",
          "warning": "#FFDF20",
        },
        myLightTheme: {
          "primary": "#ffffff",
          "primary-content": "#404853",
          "secondary": "#e4e5e7",
          "secondary-content": "#374151",
          "accent": "#675CF0",
          "accent-content": "#ffffff",
          "neutral": "#F9FAFB",
          "base-100": "#F3F4F6",
          "success": "#16A34A",
          "success-content": "#ffffff",
          "info": "#155DFC",
          "info-content": "#ffffff",
          "warning": "#FFDF20",
        },
      },
      "dark",
    ], 
  },
  plugins: [require('daisyui')],
}

