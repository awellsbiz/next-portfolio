/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '1A3636',
        secondaryBg: 'D6BD98',
        accentBg: '40534C',
      },
    },
  },
  plugins: [require('daisyui')],
};
