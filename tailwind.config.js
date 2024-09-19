module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundImage: {
      'custom-radial-header': 'radial-gradient(circle, #171010, #666063 97%)',
    },      fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },},
  },
  plugins: [],
};
