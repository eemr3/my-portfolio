/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'header-texture':
          "url('https://user-images.githubusercontent.com/42968718/203581876-30348cca-3edd-4edb-9ea5-2888d016d9ec.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
    },
  },
  plugins: [],
};
