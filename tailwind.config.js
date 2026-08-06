/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F1',
          50: '#FFFFFF',
          100: '#FDFBF8',
          200: '#FAF7F1',
          300: '#F3EDE2',
        },
        stone: {
          50: '#F7F4EF',
          100: '#F1ECE2',
          200: '#E6DFD1',
          300: '#D8CEBB',
          400: '#B8AC94',
          500: '#8F8368',
        },
        charcoal: {
          DEFAULT: '#2A2620',
          50: '#F4F2EF',
          100: '#E3DFD8',
          400: '#635C4E',
          600: '#443F35',
          700: '#332F28',
          800: '#241F1A',
          900: '#191510',
          950: '#100D0A',
        },
        gold: {
          DEFAULT: '#B08D53',
          50: '#FAF5EC',
          100: '#F1E4CB',
          200: '#E3CB9C',
          300: '#D3AF72',
          400: '#B08D53',
          500: '#9A7943',
          600: '#7C6136',
          700: '#5E4A2A',
        },
        olive: {
          DEFAULT: '#6B7052',
          400: '#868C63',
          600: '#565A40',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(42, 38, 32, 0.08)',
        card: '0 8px 30px -8px rgba(42, 38, 32, 0.12)',
        lift: '0 20px 50px -12px rgba(42, 38, 32, 0.25)',
        glass: '0 8px 32px 0 rgba(42, 38, 32, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
