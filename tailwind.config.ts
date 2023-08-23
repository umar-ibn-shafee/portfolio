import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-neue-montreal)'],
        mono: ['var(--font-roboto-mono)']
      },
      animation: {
        'blob': 'blob 10s infinite',
        'reverse-blob': 'reverse-blob 10s infinite'
      },
      keyframes: {
        'blob': {
          '0%': {
            transform: "translate(0px, 0px) scale(1)"
          },
          '33%': {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          '66%': {
            transform: "translate(600px, 60px) scale(0.9)"
          },
          '100%': {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
        'reverse-blob': {
          '0%': {
            transform: "translate(0px, 0px) scale(1)"
          },
          '33%': {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          '66%': {
            transform: "translate(-600px, 60px) scale(0.9)"
          },
          '100%': {
            transform: "translate(0px, 0px) scale(1)"
          },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
export default config
