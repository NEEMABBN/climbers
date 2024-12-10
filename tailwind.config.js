/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#0E9A8A",
        Secoundray: "#0F1D1A",
        Titles: "#2C3639",
        Borders: "#E2E2E2",
        Disable: "#B0AFA9",
        CustomBlack: "#00000066",
        Error: "#F20000",
      },
      fontSize: {
        SubTitle: "15px",
      }
    },
  },
  plugins: [forms],
}