module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      twitterBlue: '#1D9BF0',
      instagramPink: '#D32B7D',
      pinterestRed: '#B7081B',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
