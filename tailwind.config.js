/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      fredoka: ['Fredoka', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#8484FC',
      secondary: '#84fc84',
    },
    extend: {},
  },
  plugins: [],
};
