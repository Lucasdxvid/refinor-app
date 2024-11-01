/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D8735",
        menuPrimary: "#FDFDF8",
        menuSecundary: "#F5F5F7",
      },
    },
  },
  plugins: [],
};
