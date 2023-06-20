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
      textColor: {
        'syntax-light-keyword': '#D19A66',
        'syntax-light-string': '#98C379',
        'syntax-light-operator': '#56B6C2',
        'syntax-light-punctuation': '#ABB2BF',
        'syntax-dark-keyword': '#E06C75',
        'syntax-dark-string': '#98C379',
        'syntax-dark-operator': '#56B6C2',
        'syntax-dark-punctuation': '#ABB2BF',
      },
      colors: {},
    },
  },
  plugins: [require('daisyui'), require('@headlessui/tailwindcss')],
};
