/** @type {import('tailwindcss').Config} */
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
        Borders: "#EEEEEE",
        Disable: "#B0AFA9",
      }
    },
  },
  plugins: [],
}
