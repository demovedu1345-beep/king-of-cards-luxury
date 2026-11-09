/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        angraity: {
          ivory: '#F5F1E9',
          parchment: '#EAE2D5',
          ink: '#1F1B19',
          warmgrey: '#77716B',
          gold: '#B49A68',
          burgundy: '#783747',
          neutral: '#DCD5CA',
          dark: '#211F20',
        },
        ivory: {
          50: '#fdfdfc',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#ede6da',
          400: '#dfd4c0',
          500: '#cbbda3',
          600: '#b2a184',
          700: '#948368',
          800: '#7a6b54',
          900: '#645745',
        },
        gold: {
          50: '#fcfaf2',
          100: '#f8f3df',
          200: '#efe4ba',
          300: '#e3cf8b',
          400: '#d4b759',
          500: '#be9932', // Rich Antique Champagne Gold
          600: '#a37d25',
          700: '#835f1f',
          800: '#6d4d1f',
          900: '#5c411e',
        },
        charcoal: {
          950: '#111013',
          900: '#1a181e',
          850: '#242129',
          800: '#2f2b36',
          700: '#474251',
          600: '#655f71',
        },
        royal: {
          crimson: '#791828',
          emerald: '#113e28',
          sapphire: '#12254e',
        }
      },
      fontFamily: {
        zimula: ['"Zimula"', 'sans-serif'],
        display: ['"Antonio"', '"Cinzel Decorative"', 'sans-serif'],
        serif: ['"Cinzel Decorative"', '"Cinzel"', '"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #a37d25 0%, #e3cf8b 25%, #be9932 50%, #fef08a 75%, #835f1f 100%)',
        'pearl-surface': 'linear-gradient(145deg, #ffffff 0%, #faf8f5 50%, #f4f0e6 100%)',
        'ivory-radial': 'radial-gradient(circle at 50% 30%, rgba(227, 207, 139, 0.18) 0%, rgba(250, 248, 245, 0.6) 50%, #faf8f5 100%)',
      },
      animation: {
        'foil-shimmer': 'foilShimmer 5s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        foilShimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
