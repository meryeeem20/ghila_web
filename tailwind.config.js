/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ghila: {
          dark: '#063B2D',
          lime: '#C6D800',
          cream: '#FAFAF7',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(6, 59, 45, 0.08), 0 12px 32px -8px rgba(6, 59, 45, 0.1)',
        card: '0 8px 30px -6px rgba(6, 59, 45, 0.12)',
        phone: '0 32px 64px -12px rgba(6, 59, 45, 0.35), 0 0 0 1px rgba(255,255,255,0.06) inset',
        glow: '0 0 40px rgba(198, 216, 0, 0.25)',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 6.5s ease-in-out infinite',
        'float-delayed': 'float 5.5s ease-in-out infinite 0.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
