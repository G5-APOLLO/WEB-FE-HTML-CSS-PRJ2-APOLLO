module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial-header': 'radial-gradient(circle, #171010, #666063 97%)',
      },
    },
  },
  plugins: [],
};

