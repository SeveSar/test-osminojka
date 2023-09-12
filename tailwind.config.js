/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '1.3rem',
      base: ['1.5rem', '1.3'],
      md: '1.7rem',
      xl: ['3.4rem', '1.2'],
      '2xl': ['4.3rem', '1.2'],
    },
    colors: {
      yellow: '#FFF145',
      dark: '#000000',
      white: '#ffffff',
      gray: '#808080',
    },
  },
  plugins: [],
};
