/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          50: '#F8F4E6',
          100: '#F0E6C7',
          200: '#E5D08F',
          300: '#DABA57',
          400: '#D4AF37',
          500: '#B8941F',
          600: '#9C7A17',
          700: '#80600F',
          800: '#644607',
          900: '#482C00'
        },
        black: {
          DEFAULT: '#0A0A0A',
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#ADADAD',
          400: '#919191',
          500: '#767676',
          600: '#5C5C5C',
          700: '#424242',
          800: '#282828',
          900: '#0A0A0A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};