// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Example custom color
        secondary: '#9333EA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
      spacing: {
        '128': '32rem', // Custom spacing
      },
      // Add other customizations as needed
    },
  },
  plugins: [],
};
