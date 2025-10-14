
module.exports = {
  darkMode: 'class', // if you use a dark mode toggle
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',        // nicer reading width
            h1: { scrollMarginTop: '6rem' },
            h2: { scrollMarginTop: '6rem' },
            h3: { scrollMarginTop: '6rem' },
            a: { textDecoration: 'none' }, // let hover add underline if you like
          },
        },
        invert: {
          css: {
            a: { textDecoration: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
