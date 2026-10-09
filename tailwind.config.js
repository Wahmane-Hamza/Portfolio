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
        parchment: {
          50: '#fffdfa',
          100: '#fdf8ee',
          200: '#f6eed9',
          300: '#ede0c2',
          400: '#decba2',
          500: '#cbb382',
        },
        vintage: {
          dark: '#1e140b',
          ink: '#2b1c11',
          espresso: '#382414',
          sepia: '#5e432b',
          leather: '#7c5737',
          paper: '#f5edd6',
          parchment: '#faecd1',
          aged: '#e8dcbd',
          brass: '#b8860b',
          gold: '#c59b27',
          wax: '#9e2a2b',
          waxDark: '#72191a',
        }
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        serif: ['Cormorant Garamond', 'EB Garamond', 'Georgia', 'serif'],
        typewriter: ['Courier Prime', 'monospace'],
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
