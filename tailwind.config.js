/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        'custom-120': '120px',
      },
      fontWeight: {
        medium: 500,
      }
    },
  },
  plugins: [],
}
