import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: `var(--color-primary-background)`,
        secondary: `var(--color-secondary-background)`,
        cta: `var(--color-primary-cta)`,
      },
      fontFamily: {
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
