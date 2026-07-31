import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D4B896',
        secondary: '#6B4E3D',
        quickalert: {
          wood: {
            light: '#F5E6D3',
            medium: '#D4B896',
            dark: '#A0825D',
            darker: '#8B6F47',
            darkest: '#6B4E3D',
          },
          accent: {
            light: '#FFD080',
            medium: '#F5A623',
            dark: '#E09000',
            darker: '#CC8000',
            darkest: '#B87000',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(38px, 6.2vw, 68px)', { lineHeight: '1.04', letterSpacing: '-0.028em' }],
        section: ['clamp(28px, 3.6vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.022em' }],
        eyebrow: ['12px', { lineHeight: '1', letterSpacing: '0.14em' }],
      },
      transitionTimingFunction: {
        qa: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in': 'scale-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
export default config
