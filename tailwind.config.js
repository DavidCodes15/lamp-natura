/** @type {import('tailwindcss').Config} */
module.exports = {
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
      animation: {
        'color-change': 'colorChange 4s infinite', // Define a custom animation named 'color-change'
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: 'black', transform: 'scale(1)' },
          '20%': { color: '#ff9a00', transform: 'scale(1.2)' },
          '40%': { color: '#ff9a00', transform: 'translateY(-5px)' },
          '60%': { color: '#ff9a00', transform: 'scale(1.1)' },
          '80%': { color: '#ff9a00', transform: 'translateY(2px)' },
        },
      },
    },
  },
  plugins: [],
}
