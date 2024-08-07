/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textGray: '#2d2f31'
      },
      // fontFamily: {
      //   'text': ['"Udemy Sans"', '"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', 'Roboto', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      //   'heading': ['"Udemy Sans"', '-apple-system', 'BlinkMacSystemFont', 'Roboto', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      //   'heading-serif': ['SuisseWorks', 'Georgia', 'Times', '"Times New Roman"', 'serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      // },
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

