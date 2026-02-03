/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#059669', // A shade of green
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
