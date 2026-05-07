/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        nepal: {
          red:    '#DC143C',
          blue:   '#003778',
          gold:   '#C8960C',
          earth:  '#8B5E3C',
          sky:    '#87CEEB',
          snow:   '#F8F9FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.800'),
            a: { color: theme('colors.primary.700') },
            h2: { color: theme('colors.gray.900'), fontFamily: theme('fontFamily.display').join(', ') },
            h3: { color: theme('colors.gray.900') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
