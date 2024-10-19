/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#0049c6',
        secondary: '#ffbc6c',
        neutral: '#0A0B0B',
        main: '#334155'
      },
      animation: {
        'move': 'move 6s ease-in-out infinite',
        'loop-scroll': 'loop-scroll 3s linear infinite'
      },
      keyframes: {
        move: {
          '50%': {
            transform: 'translateY(1.3rem)'
          }
        },
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    },
  },
  plugins: [],
}

