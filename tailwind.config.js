/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      white: "#F9FAFB",
      black: "#242424",
      slate: {
        200: "#F3F4F6",
        300: "#D1D5DB",
        500: "#6B7280",
        600: "#4B5563",
        800: "#1F2937",
        900: "#111827",
      }
    },
    extend: {},
  },
  plugins: [],
}

