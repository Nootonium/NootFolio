/** @type {import('tailwindcss').Config} */

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
};
