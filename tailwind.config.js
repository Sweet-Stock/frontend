module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: {
          500: '#26223b'
        },
        secondary: {
          500: '#d38c88'
        },
        tertiary: {
          500: '6b829a'
        },
        bg_neutral: {
          500: '#e5e5e5'
        }
      },
      animation: {
        shake: 'shake 0.5s ease-out'
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(4px)' },
          '40%': { transform: 'translate(-4px)' },
          '60%': { transform: 'translate(4px)' },
          '80%': { transform: 'translate(-4px)' },
          '100%': { transform: 'translate(0)' },
        }
      }
    }
  },
  plugins: []
}
