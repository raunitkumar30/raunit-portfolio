/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      height: {
        '75': '18.75rem',
        '155': '38.75rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        decorative: ['var(--font-young-serif)', 'serif'],
        junge: ['Junge', 'serif'],
      },
    },
  },
  plugins: [],
};
