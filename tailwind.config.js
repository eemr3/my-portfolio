/** @type {import('tailwindcss').Config} */

const { violet, blackA, mauve, green } = require('@radix-ui/colors');
const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: (theme) => ({
        'header-texture':
          "url('https://user-images.githubusercontent.com/42968718/203581876-30348cca-3edd-4edb-9ea5-2888d016d9ec.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      boxShadow: {
        'normal-lg': '0 4px 6px rgba(0, 0, 0, .3)',
        'hover-3xl': '0 10px 20px rgba(0, 0, 0, .7)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
