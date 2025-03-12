/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        JetBrainsMono: ['JetBrains Mono', 'monospace'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      backgroundColor: {
        rainbow: 'bg-gradient-to-r from-red-500 via-yellow-500 to-cyan-500',
      },
      textColor: {},
      colors: {},
    },
  },
  plugins: [require('daisyui'), require('@headlessui/tailwindcss')],
  daisyui: {
    themes: ['light', 'dark', 'black'],
  },
};
