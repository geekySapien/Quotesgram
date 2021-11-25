const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            twitterBlue: '#1D9BF0',
            instagramPink: '#D32B7D',
            pinterestRed: '#B7081B',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            blue: colors.blue,
            green: colors.emerald,
            purple:colors.violet,
        },
        extend: {
            screens: {
                xs: '480px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
