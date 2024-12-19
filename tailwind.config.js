/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f0f0f',
          dark: '#ffffff',
        },
        secondary: {
          DEFAULT: '#454545',
          dark: '#d2d2d2',
        },
        textPrimary: {
          DEFAULT: '#0f0f0f',
          dark: '#ffffff',
        },
        textSecondary: {
          DEFAULT: '#454545',
          dark: '#d2d2d2',
        },
        textDisabled: {
          DEFAULT: '#616161',
          dark: '#9e9e9e',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
