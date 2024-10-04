/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--bg-color)',
        primary600: 'var(--primary-600)',
        primary300: 'var(--primary-300)',
        primary100: 'var(--primary-100)',
        neutral900: 'var(--neutral-900)',
        neutral700: 'var(--neutral-700)',
        neutral500: 'var(--neutral-500)',
        neutral300: 'var(--neutral-300)',
        neutral100: 'var(--neutral-100)',
      },
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

