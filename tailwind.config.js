module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    fontFamily: {
      varela: ['Varela Round', 'sans-serif'],
    },
    gridTemplateColumns: {
      2: 'repeat(2, 150px)',
      4: 'repeat(4, 150px)',
    },
  },
  plugins: [],
};
