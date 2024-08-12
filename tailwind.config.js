/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textGray: '#2D2F31'
      },
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.shadow-bottom': {
          boxShadow: '0 3px 9px -1px #C7C7C7, 0 2px 10px -1px #D4D4D4',
        },
      });
    },
  ],
}

