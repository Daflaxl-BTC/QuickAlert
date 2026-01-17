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
    },
  },
  plugins: [],
}
export default config
