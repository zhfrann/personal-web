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
        'move': 'move 6s ease-in-out infinite'
      },
      keyframes: {
        move: {
          '50%': {
            transform: 'translateY(1.3rem)'
          }
        }
      }
    },
  },
  plugins: [],
}

