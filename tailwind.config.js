/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      'sidebar-mobile': 'url("./src/assets/images/bg-sidebar-mobile.svg")',
      'sidebar-desktop': 'url("./src/assets/images/bg-sidebar-desktop.svg")',
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      lg: '10px',
      xl: '15px',
      full: '9999px',
    },
    boxShadow: {
      md: '0, 25, 40, -20, rgba(0, 0, 0, 0.0951)',
    },
    colors: {
      bg: '#EFF5FF',
      'border-color': '#D6D9E6',
      denim: '#022959',
      grey: '#9699AA',
      'light-blue': '#ABBCFF',
      'light-grey': '#D6D9E6',
      orange: '#FFAF7E',
      pink: '#F9818E',
      purple: '#483EFF',
      'red-errors': '#EE374A',
      'sky-blue': '#BEE2FD',
      transparent: '#00000000',
      'very-light-grey': '#F8F9FF',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    fontSize: {
      sm: ['12px', 'normal'],
      md: ['14px', 'normal'],
      lg: ['16px', '25px'],
      'heading-md': ['24px', 'normal'],
      'heading-lg': ['32px', 'normal'],
    },
    extend: {},
  },
  plugins: [],
}
