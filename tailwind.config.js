module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        // 'button-gradient-1': "linear-gradient(91.25deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.2) 99.82%)",
        // "button-gradient-2":"linear-gradient(45deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.2) 99.82%)";
      },
      // custom user configuration
      bgGradientDeg: {
        75: '75deg',
      }

  },
  plugins: [],
  }

}