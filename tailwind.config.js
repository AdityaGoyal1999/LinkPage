/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        grey: {
          700: 'hsl(var(--color-grey-700))',
          800: 'hsl(var(--color-grey-800))',
          900: 'hsl(var(--color-grey-900))'
        },
        customWhite: 'hsl(var(--color-white))',
        green: 'hsl(var(--color-green))'
      }
    },
  },
  plugins: [],
}

