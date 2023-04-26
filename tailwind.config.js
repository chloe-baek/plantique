/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5a694c',
      },
      backgroundImage: {
        banner: `url('../public/img/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
