/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '500px',
        'xxs':'400px',
        'xxss':'300px',
      },
    },
  },
  plugins: [],
}