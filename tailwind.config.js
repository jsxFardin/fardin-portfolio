/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#faf8f4',
          2: '#f3efe8',
          3: '#ebe6dc',
        },
        ink: {
          DEFAULT: '#15140f',
          2: '#4b4842',
          3: '#6b675f',
        },
        line: {
          DEFAULT: '#e3ded4',
          strong: '#c9c2b4',
        },
        accent: {
          DEFAULT: '#3730a3',
          hover: '#2b2680',
          soft: '#e9e7f8',
        },
        live: '#15803d',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '72rem',
      },
      boxShadow: {
        card: '0 8px 30px -12px rgba(21, 20, 15, 0.25)',
        float: '0 10px 30px -10px rgba(21, 20, 15, 0.45)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
