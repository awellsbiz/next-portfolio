/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#656F42",  // Olive Green
        secondary: "#2D351D", // Dark Green
        accent: "#D3A36C",    // Tan
        neutral: "#B6753B",   // Rust Brown
        base: "#FFFBE6",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#656F42",
          "secondary": "#2D351D",
          "accent": "#D3A36C",
          "neutral": "#B6753B",
          "base-100": "#FFFBE6",
          "info": "#A0AEC0",
          "success": "#81E6D9",
          "warning": "#F6E05E",
          "error": "#FC8181",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
