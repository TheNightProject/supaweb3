/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,vue}',
    '../ui/src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#2D3748',
        },
      },
    },
  },
  plugins: [],
};