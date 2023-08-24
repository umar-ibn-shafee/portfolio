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
        'blob': 'blob 4s infinite',
        'reverse-blob': 'reverse-blob 4s infinite',
        'corners': 'corners 15s infinite',
        'go-rounds': 'go-rounds 10s infinite',
        'wave': 'wave 15s',
      },
      keyframes: {
        'wave': {
          '0%': {
            transform: "translate(0px, 0px) scale(1)"
          },
          '50%': {
            transform: "translate(-400px, -500px) scale(1)"
          },
          '100%': {
            transform: "translate(-1000px, 0px) scale(0.8)"
          },
        },
        'go-rounds': {
          '0%, 100%': {
            transform: "translate(0px, 0px) scale(1)"
          },
          '20%': {
            transform: "translate(-400px, -500px) scale(1.3)"
          },
          '30%': {
            transform: "translate(-1000px, 0px) scale(1.6)"
          },
          '40%': {
            transform: "translate(-400px, -100px) scale(2)"
          },
          '50%': {
            transform: "translate(400px, -500px) scale(2.4)"
          },
          '60%': {
            transform: "translate(-400px, -1100px) scale(2.2)"
          },
          '70%': {
            transform: "translate(-900px, -900px) scale(2)"
          },
          '80%': {
            transform: "translate(-900px, -400px) scale(1.6)"
          },
          '90%': {
            transform: "translate(-400px, -500px) scale(1.3)"
          }
        },
        'corners': {
          '0%, 100%': {
            transform: "translate(0px, 0px) scale(1)"
          },
          '10%': {
            transform: "translate(400px, -500px) scale(1.2)"
          },
          '20%': {
            transform: "translate(1000px, 0px) scale(0.8)"
          },
          '30%': {
            transform: "translate(-200px, -100px) scale(1.4)"
          },
          '40%': {
            transform: "translate(-200px, -800px) scale(1.2)"
          },
          '50%': {
            transform: "translate(400px, -800px) scale(1.5)"
          },
          '60%': {
            transform: "translate(1000px, -500px) scale(1.8)"
          },
          '70%': {
            transform: "translate(800px, 0px) scale(1.2)"
          },
          '80%': {
            transform: "translate(200px, -800px) scale(1.8)"
          },
          '90%': {
            transform: "translate(-200px, -700px) scale(1.2)"
          }
        },
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
