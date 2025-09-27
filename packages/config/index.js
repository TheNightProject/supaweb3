/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'web3': {
          'primary': {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
          'eth': {
            'light': '#627EEA',
            'DEFAULT': '#627EEA',
            'dark': '#4E64BB'
          },
          'matic': {
            'light': '#8247E5',
            'DEFAULT': '#8247E5',
            'dark': '#6835B8'
          },
          'bnb': {
            'light': '#F3BA2F',
            'DEFAULT': '#F3BA2F',
            'dark': '#C29526'
          },
          'usdc': {
            'light': '#2775CA',
            'DEFAULT': '#2775CA',
            'dark': '#1E5EA2'
          },
          'dai': {
            'light': '#F5AC37',
            'DEFAULT': '#F5AC37',
            'dark': '#C48A2C'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'web3-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'eth-gradient': 'linear-gradient(135deg, #627EEA 0%, #4E64BB 100%)',
        'nft-gradient': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(98, 126, 234, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(98, 126, 234, 0.8)' }
        }
      },
      boxShadow: {
        'web3': '0 10px 30px -5px rgba(98, 126, 234, 0.3)',
        'web3-lg': '0 20px 40px -10px rgba(98, 126, 234, 0.4)',
        'nft': '0 10px 30px -5px rgba(250, 112, 154, 0.3)',
      },
      fontFamily: {
        'web3': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    }
  },
  plugins: []
}