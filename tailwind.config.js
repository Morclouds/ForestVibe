/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      colors: {
        'forest': {
          50: '#f0f9f1',
          100: '#dcf0e0',
          200: '#bae0c3',
          300: '#8fc79d',
          400: '#5eaa74',
          500: '#3e8c56',
          600: '#2d7043',
          700: '#255938',
          800: '#1f462f',
          900: '#1a3b28',
          950: '#0f2118',
        },
        'purple': {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dcd5ff',
          300: '#c3b5fe',
          400: '#a68cfc',
          500: '#8a5cf7',
          600: '#7839ee',
          700: '#6926d3',
          800: '#5720ae',
          900: '#4a1d8d',
          950: '#2d0e5a',
        },
        'pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(167, 139, 250, 0.5)',
        'glow-strong': '0 0 25px rgba(167, 139, 250, 0.7)',
      },
    },
  },
  plugins: [],
};