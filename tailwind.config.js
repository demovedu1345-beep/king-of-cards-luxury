/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf4',
          100: '#f9f5e2',
          200: '#f2e8be',
          300: '#e8d692',
          400: '#dcbf65',
          500: '#d4af37', // Classic Imperial Champagne Gold
          600: '#b89028',
          700: '#946e20',
          800: '#7a571f',
          900: '#67471d',
        },
        obsidian: {
          950: '#040305',
          900: '#08070b',
          850: '#0d0b11',
          800: '#14111a',
          700: '#1e1a26',
        },
        imperial: {
          crimson: '#6b0d1e',
          ruby: '#9b1b30',
          emerald: '#082f1e',
          deepBlue: '#0c1b33',
        }
      },
      fontFamily: {
        serif: ['"Cinzel Decorative"', '"Cinzel"', '"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #c59b27 0%, #fef3c7 25%, #d4af37 50%, #fef08a 75%, #b4851c 100%)',
        'gold-foil-subtle': 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(254,243,199,0.3) 50%, rgba(180,133,28,0.2) 100%)',
        'radial-vignette': 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.06) 0%, rgba(4,3,5,0.85) 75%, #040305 100%)',
      },
      animation: {
        'foil-shimmer': 'foilShimmer 6s linear infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        foilShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.2deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
