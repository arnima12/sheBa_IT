/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        shebaTheme: {
          "primary": "#19D3AE",
          "secondary": "#0FCFEC",
          "base-100": "#FFFFFF",
          "accent": "#2A303C",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

