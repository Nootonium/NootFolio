/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        JetBrainsMono: ['JetBrains Mono', 'monospace'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      textColor: {},
      colors: {},
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark', 'black'],
  },
};
