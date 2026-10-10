/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        manila: {
          50: '#fffdf8',
          100: '#faf2db',
          200: '#f4e9cb',
          300: '#eadbb5',
          400: '#dec796',
          500: '#cbb07a',
          folder: '#e2cf9f',
          tab: '#cbba88',
          tabActive: '#f8f0dc',
        },
        stamp: {
          red: '#b82728',
          redDark: '#8a1718',
          ink: '#1d1a16',
          blue: '#2d4d77',
        }
      },
      fontFamily: {
        typewriter: ['Special Elite', 'Courier Prime', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
        poster: ['Bebas Neue', 'sans-serif'],
        mono: ['Courier Prime', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
