/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sharo: {
          brown: "#5E5240",
          gold: "#F4C430",
          light: "#F5F1E8",
          dark: "#3D2817"
        }
      }
    },
  },
  plugins: [],
}
