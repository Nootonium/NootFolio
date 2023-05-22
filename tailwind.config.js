/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ['Oswald', 'sans-serif'],
      },
      backgroundColor: {
        rainbow: 'bg-gradient-to-r from-red-500 via-yellow-500 to-cyan-500',
      },
      textColor: {},
      colors: {
        dark: {
          100: '#1a1a1a',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
